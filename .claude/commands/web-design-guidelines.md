Review UI code for Web Interface Guidelines compliance. Checks accessibility, design quality, and UX best practices.

## Task

1. Fetch the latest guidelines:

```
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

Use WebFetch to retrieve the current rules.

2. Read the files specified in `$ARGUMENTS` (or ask the user which files to review if none provided).

3. Check the files against all rules in the fetched guidelines.

4. Output findings in terse `file:line` format as specified by the guidelines document.

If no argument is provided, ask: "Which files or pattern should I review? (e.g. `app/**/*.tsx`, `components/Button.tsx`)"
