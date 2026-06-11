Display this reference card. One-shot — do NOT change mode, write flag files, or persist anything. Output in caveman style.

## Modes

| Mode | Trigger | What change |
|------|---------|-------------|
| **Lite** | `/caveman lite` | Drop filler. Keep sentence structure. |
| **Full** | `/caveman` | Drop articles, filler, pleasantries, hedging. Fragments OK. Default. |
| **Ultra** | `/caveman ultra` | Extreme compression. Bare fragments. Tables over prose. |
| **Wenyan-Lite** | `/caveman wenyan-lite` | Classical Chinese style, light compression. |
| **Wenyan-Full** | `/caveman wenyan` | Full 文言文. Maximum classical terseness. |
| **Wenyan-Ultra** | `/caveman wenyan-ultra` | Extreme. Ancient scholar on a budget. |

Mode stick until changed or session end.

## Commands

| Command | What it do |
|---------|-----------|
| `/caveman [level]` | Activate caveman mode at specified level (default: full) |
| `/caveman-commit` | Terse commit messages. Conventional Commits. ≤50 char subject. |
| `/caveman-review [file/diff]` | One-line review comments: `L42: 🔴 bug: user null. Add guard.` |
| `/caveman-compress <file>` | Compress .md files to caveman prose. |
| `/caveman-help` | This card. |
| `/cavecrew` | Guide for delegating to compressed subagents. |

## Deactivate

Say "stop caveman" or "normal mode". Resume anytime with `/caveman`.
