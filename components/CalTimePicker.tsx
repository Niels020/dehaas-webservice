"use client";

import { useEffect, useState, useTransition } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAvailableSlots, type SlotsMap } from "@/app/actions/cal-slots";

const TZ = "Europe/Amsterdam";
const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function dateKey(year: number, month: number, day: number): string {
	return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function todayKey(): string {
	return new Date().toLocaleDateString("sv-SE", { timeZone: TZ });
}

function formatTime(iso: string): string {
	return new Date(iso).toLocaleTimeString("nl-NL", {
		hour: "2-digit",
		minute: "2-digit",
		timeZone: TZ,
	});
}

interface CalTimePickerProps {
	selectedSlot: string | null;
	onSelect: (slot: { start: string } | null) => void;
}

export default function CalTimePicker({
	selectedSlot,
	onSelect,
}: CalTimePickerProps) {
	const now = new Date();
	const [year, setYear] = useState(now.getFullYear());
	const [month, setMonth] = useState(now.getMonth());
	const [selectedDate, setSelectedDate] = useState<string | null>(null);
	const [slots, setSlots] = useState<SlotsMap>({});
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		startTransition(async () => {
			const data = await getAvailableSlots(year, month);
			setSlots(data);
		});
	}, [year, month]);

	const today = todayKey();
	const atCurrentMonth =
		year === now.getFullYear() && month === now.getMonth();

	function prevMonth() {
		if (atCurrentMonth) return;
		if (month === 0) {
			setYear((y) => y - 1);
			setMonth(11);
		} else {
			setMonth((m) => m - 1);
		}
		setSelectedDate(null);
		onSelect(null);
	}

	function nextMonth() {
		if (month === 11) {
			setYear((y) => y + 1);
			setMonth(0);
		} else {
			setMonth((m) => m + 1);
		}
		setSelectedDate(null);
		onSelect(null);
	}

	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7; // 0 = Mon
	const cells: (number | null)[] = [
		...Array<null>(firstWeekday).fill(null),
		...Array.from({ length: daysInMonth }, (_, i) => i + 1),
	];
	while (cells.length % 7 !== 0) cells.push(null);

	const monthLabel = new Date(year, month).toLocaleDateString("en-NL", {
		month: "long",
		year: "numeric",
	});

	function handleDayClick(day: number) {
		const key = dateKey(year, month, day);
		if (key < today) return;
		if (!slots[key]?.length) return;
		setSelectedDate(key);
		onSelect(null);
	}

	const timeSlotsForDate = selectedDate ? (slots[selectedDate] ?? []) : [];

	return (
		<div className="flex flex-col gap-5">
			{/* Month navigation */}
			<div className="flex items-center justify-between">
				<button
					type="button"
					onClick={prevMonth}
					disabled={atCurrentMonth}
					className={cn(
						"flex h-8 w-8 items-center justify-center rounded-lg border transition-colors",
						atCurrentMonth
							? "border-border/40 text-muted-foreground/40 cursor-default"
							: "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
					)}
				>
					<ChevronLeft className="h-4 w-4" />
				</button>
				<span className="text-sm font-medium text-foreground">
					{monthLabel}
				</span>
				<button
					type="button"
					onClick={nextMonth}
					className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
				>
					<ChevronRight className="h-4 w-4" />
				</button>
			</div>

			{/* Calendar grid */}
			<div
				className={cn(
					"grid grid-cols-7 gap-y-1 transition-opacity duration-200",
					isPending && "opacity-50 pointer-events-none",
				)}
			>
				{WEEKDAYS.map((d) => (
					<div
						key={d}
						className="py-1 text-center text-xs font-medium text-muted-foreground"
					>
						{d}
					</div>
				))}

				{cells.map((day, i) => {
					if (day === null) return <div key={i} />;

					const key = dateKey(year, month, day);
					const isPast = key < today;
					const available = !isPast && (slots[key]?.length ?? 0) > 0;
					const isSelected = selectedDate === key;
					const isToday = key === today;

					return (
						<button
							key={i}
							type="button"
							onClick={() => handleDayClick(day)}
							disabled={isPast || !available}
							className={cn(
								"relative mx-auto flex h-9 w-9 items-center justify-center rounded-lg text-sm transition-colors",
								isSelected &&
									"bg-primary text-primary-foreground font-medium",
								!isSelected &&
									available &&
									"text-foreground hover:bg-muted cursor-pointer",
								(isPast || !available) &&
									"text-muted-foreground/40 cursor-default",
								isToday &&
									!isSelected &&
									"font-semibold underline underline-offset-2",
							)}
						>
							{day}
							{available && !isSelected && (
								<span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
							)}
						</button>
					);
				})}
			</div>

			{/* Time slots */}
			{selectedDate && (
				<div className="flex flex-col gap-2">
					<span className="text-sm font-medium text-foreground">
						Available times
					</span>
					{timeSlotsForDate.length === 0 ? (
						<p className="text-sm text-muted-foreground">
							No slots available for this date.
						</p>
					) : (
						<div className="flex flex-wrap gap-2">
							{timeSlotsForDate.map((slot) => (
								<button
									key={slot.start}
									type="button"
									onClick={() => onSelect({ start: slot.start })}
									className={cn(
										"rounded-lg border px-4 py-2 text-sm transition-colors",
										selectedSlot === slot.start
											? "border-primary bg-primary/10 font-medium text-primary"
											: "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
									)}
								>
									{formatTime(slot.start)}
								</button>
							))}
						</div>
					)}
				</div>
			)}
		</div>
	);
}
