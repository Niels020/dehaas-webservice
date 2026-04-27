export default function UnderConstruction() {
	return (
		<div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
			{/* Blur overlay */}
			<div className="absolute inset-0 bg-background/60 backdrop-blur-md" />

			{/* Badge */}
			<div className="relative rounded-2xl border border-border bg-background px-8 py-6 text-center shadow-xl">
				<p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
					Coming soon
				</p>
				<p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
					Under construction
				</p>
				<p className="mt-2 text-sm text-muted-foreground">
					This site is not live yet.
				</p>
			</div>
		</div>
	);
}
