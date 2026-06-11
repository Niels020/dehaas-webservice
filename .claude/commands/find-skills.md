Help discover and install agent skills from the open agent skills ecosystem (skills.sh).

## When to Use

Use when the user:
- Asks "find a skill for X" or "is there a skill for X"
- Wants to extend agent capabilities with a specialized skill
- Needs help with a domain that might have a published skill

## Process

1. **Check the leaderboard first:** Top skills for web dev include `vercel-labs/agent-skills` (React, Next.js, web design) with 100K+ installs each.

2. **Search for skills:**
```bash
npx skills find $ARGUMENTS
```

3. **Verify quality before recommending:**
   - Prefer skills with 1K+ installs
   - Official sources (`vercel-labs`, `anthropics`, `microsoft`) are more trustworthy
   - Check GitHub stars on the source repo

4. **Present options** with: skill name, what it does, install count, install command.

5. **Install if requested:**
```bash
npx skills add <owner/repo@skill> -g -y
```

## Common Skill Categories

| Category | Example Queries |
|----------|----------------|
| Web Development | react, nextjs, typescript, css, tailwind |
| Testing | testing, jest, playwright, e2e |
| DevOps | deploy, docker, kubernetes, ci-cd |
| Documentation | docs, readme, changelog, api-docs |
| Code Quality | review, lint, refactor, best-practices |
| Design | ui, ux, design-system, accessibility |

## Task

Search for skills related to: `$ARGUMENTS`

If no argument provided, ask what domain or task the user needs help with.
