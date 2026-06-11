Deploy this project to Vercel. **Always deploy as preview** (not production) unless the user explicitly asks for production.

## Step 1: Gather Project State

Run all four checks before deciding which method to use:

```bash
git remote get-url origin 2>/dev/null
cat .vercel/project.json 2>/dev/null || cat .vercel/repo.json 2>/dev/null
vercel whoami 2>/dev/null
vercel teams list --format json 2>/dev/null
```

If the user belongs to multiple teams, present all available team slugs as a bulleted list and ask which one to deploy to. Pass the team slug via `--scope` on all subsequent CLI commands.

## Step 2: Choose a Deploy Method

### Linked + has git remote → Git Push

Ask before pushing. Then:
```bash
git add .
git commit -m "deploy: <description>"
git push
```
Retrieve preview URL: `vercel ls --format json`

### Linked + no git remote → `vercel deploy`

```bash
vercel deploy [path] -y --no-wait
vercel inspect <deployment-url>
```

### Not linked + CLI authenticated → Link first

```bash
vercel link --repo --scope <team-slug>   # if git remote exists
vercel link --scope <team-slug>          # if no git remote
```
Then deploy using best available method (git push or `vercel deploy -y --no-wait`).

### Not linked + CLI not authenticated → Install, auth, link, deploy

```bash
npm install -g vercel
vercel login
vercel link --repo --scope <team-slug>
```

## Output

Always show the user the deployment URL. Do not curl/fetch the deployed URL to verify — just return the link.

## Troubleshooting

**Build failure:** `vercel inspect <deployment-url> --logs`

**Token not found:** Check `printenv | grep -i vercel` and `grep -i vercel .env 2>/dev/null`

**Wrong team:** `vercel whoami --scope <team-slug>`

**CLI not installed:** `npm install -g vercel`

## Task

$ARGUMENTS — if a path or flag is provided, use it. Otherwise deploy the current directory.
