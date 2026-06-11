Decision guide for delegating to caveman-style subagents. Use when you want to spawn compressed subagents to save main context.

Cavecrew = three subagent presets that emit caveman output. Same job as default agents (`Explore`, edit-style agents, reviewer); difference is the tool-result they return is compressed, so main context shrinks per delegation.

## When to use cavecrew vs alternatives

| Task | Use |
|---|---|
| "Where is X defined / what calls Y / list uses of Z" | `cavecrew-investigator` |
| Same but you also want suggestions/architecture commentary | `Explore` (vanilla) |
| Surgical edit, ≤2 files, scope obvious | `cavecrew-builder` |
| New feature / 3+ files / cross-cutting refactor | Main thread |
| Review diff, branch, or file for bugs | `cavecrew-reviewer` |
| Deep code review with rationale + alternatives | `code-review` (vanilla) |
| One-line answer you already know | Main thread, no subagent |

Rule of thumb: **if you'd want the subagent's output in 1/3 the tokens, pick cavecrew. If you'd want prose, pick vanilla.**

## Output contracts

**`cavecrew-investigator`** prompt template:
```
You are cavecrew-investigator. Find [THING] in the codebase.
Output ONLY:
<Header>:
- path:line — `symbol` — short note
totals: <counts>.
Or `No match.` Nothing else. No prose.
```

**`cavecrew-builder`** prompt template:
```
You are cavecrew-builder. Edit [FILE] at [PATH:LINE]: [CHANGE ≤10 words].
Output ONLY:
<path:line-range> — <change ≤10 words>.
verified: <re-read OK | mismatch @ path:line>.
Or one of: too-big. / needs-confirm. / ambiguous. / regressed.
Nothing else.
```

**`cavecrew-reviewer`** prompt template:
```
You are cavecrew-reviewer. Review [DIFF/FILE].
Output ONLY:
path:line: <emoji> <severity>: <problem>. <fix>.
totals: N🔴 N🟡 N🔵 N❓
Or `No issues.` Findings sorted file → line ascending. Nothing else.
```

## Chaining patterns

**Locate → fix → verify** (most common):
1. `cavecrew-investigator` returns site list.
2. Pick 1-2 sites, hand paths to `cavecrew-builder`.
3. `cavecrew-reviewer` audits the diff.

**Parallel scout** (when investigation is broad):
Spawn 2-3 `cavecrew-investigator` calls in one message (different angles: defs vs callers vs tests). Aggregate results.

**Single-shot edit** (when site is already known):
Skip investigator. Hand exact path:line to `cavecrew-builder` directly.

## What NOT to do

- Don't use `cavecrew-builder` when you don't already know the file.
- Don't chain `cavecrew-investigator → cavecrew-builder` for a 5-file refactor. Builder will return `too-big.`
- Don't ask `cavecrew-reviewer` for "general feedback" — it returns findings only, no architecture opinions.
- Don't expect prose. Cavecrew output is structured, terse.

## Task

$ARGUMENTS — if provided, interpret as the delegation task and spawn the appropriate cavecrew subagent(s). If empty, show this guide.
