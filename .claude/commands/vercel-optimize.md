Run a Vercel performance and cost optimization audit. Metrics-first approach — recommendations start from production signals, not repo-wide grep.

## Prerequisites

- Vercel CLI v53+ authenticated: `vercel login`
- Project linked: `vercel link`
- Node.js 20+
- Observability Plus for route-level metric-backed recommendations

Never put auth tokens in shell commands.

## Framework Support

| Framework | Status |
|---|---|
| Next.js App Router | supported |
| Next.js Pages Router | supported |
| SvelteKit | supported |
| Nuxt | supported |
| Astro | limited |
| Hono / Remix / unknown | blocked by default |

## Pipeline

### 1. Collect signals

```bash
RUN_DIR="$(mktemp -d -t vercel-optimize-XXXXXX)"
node .agents/skills/vercel-optimize/scripts/collect-signals.mjs [projectId] > "$RUN_DIR/vercel-signals.json" 2> "$RUN_DIR/collect.stderr"
node .agents/skills/vercel-optimize/scripts/scan-codebase.mjs <repo-root> > "$RUN_DIR/codebase.json"
node .agents/skills/vercel-optimize/scripts/merge-signals.mjs "$RUN_DIR/vercel-signals.json" "$RUN_DIR/codebase.json" --out "$RUN_DIR/signals.json"
```

### 2. Gate candidates

```bash
node .agents/skills/vercel-optimize/scripts/gate-investigations.mjs "$RUN_DIR/signals.json" > "$RUN_DIR/gate.json"
node .agents/skills/vercel-optimize/scripts/budget-summary.mjs "$RUN_DIR/gate.json" --format json > "$RUN_DIR/budget-summary.json"
```

Default budget: 6 code-scope candidates. Expand: `--max-candidates 12` or `--max-candidates all`

### 3. Deep-dive and reconcile

```bash
node .agents/skills/vercel-optimize/scripts/deep-dive.mjs "$RUN_DIR/signals.json" "$RUN_DIR/gate.json" --cwd <project-dir> > "$RUN_DIR/investigation-evidence.json"
node .agents/skills/vercel-optimize/scripts/reconcile-candidates.mjs "$RUN_DIR/investigation-evidence.json" --gate "$RUN_DIR/gate.json" --out "$RUN_DIR/reconciled-investigation.json"
```

### 4. Generate briefs, investigate, collect outputs

```bash
node .agents/skills/vercel-optimize/scripts/prepare-investigation-brief.mjs "$RUN_DIR/signals.json" "$RUN_DIR/reconciled-investigation.json" --list > "$RUN_DIR/briefs-manifest.json"
mkdir -p "$RUN_DIR/briefs" "$RUN_DIR/sub-agent-outputs"
# Generate one brief per entry, then investigate (inline for 1-2, parallel agents for 3+)
node .agents/skills/vercel-optimize/scripts/collect-sub-agent-outputs.mjs --manifest "$RUN_DIR/briefs-manifest.json" --out "$RUN_DIR/recommendations.json" "$RUN_DIR/sub-agent-outputs/"
```

### 5. Verify and render

```bash
node .agents/skills/vercel-optimize/scripts/verify-and-regen.mjs "$RUN_DIR/recommendations.json" --signals "$RUN_DIR/signals.json" --repo-root <project-dir> --out "$RUN_DIR/verify.json"
node .agents/skills/vercel-optimize/scripts/render-report.mjs "$RUN_DIR/verify.json" "$RUN_DIR/gate.json" "$RUN_DIR/signals.json" --project <name> --out "$RUN_DIR/report.md" --message-out "$RUN_DIR/final-message.json"
```

Print `final-message.json.body` verbatim and stop.

## Task

$ARGUMENTS — project name or path. If not provided, use the current directory.
