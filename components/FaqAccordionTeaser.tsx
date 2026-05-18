"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = { q: string; a: string };

export default function FaqAccordionTeaser({ items }: { items: FaqItem[] }) {
	return (
		<Accordion className="w-full">
			{items.map(({ q, a }) => (
				<AccordionItem key={q} value={q}>
					<AccordionTrigger className="text-left text-base font-medium">
						{q}
					</AccordionTrigger>
					<AccordionContent className="text-base leading-relaxed text-muted-foreground">
						{a}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
