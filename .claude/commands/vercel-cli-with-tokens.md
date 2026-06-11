Deploy and manage projects on Vercel using token-based authentication (no interactive login).

## Step 1: Locate the Token

Work through these in order:

```bash
# A) Already in environment?
printenv VERCEL_TOKEN

# B) In .env as VERCEL_TOKEN?
grep '^VERCEL_TOKEN=' .env 2>/dev/null

# C) In .env under a different name? (Vercel tokens start with vca_)
grep -i 'vercel' .env 2>/dev/null
```

If found, export: `export VERCEL_TOKEN=$(grep '^VERCEL_TOKEN=' .env | cut -d= -f2-)`

If not found, ask the user. They can create a token at vercel.com/account/tokens.

**Never pass the token as `--token` flag** — export it as env var, the CLI reads it natively.

## Step 2: Locate Project and Team

```bash
printenv VERCEL_PROJECT_ID
printenv VERCEL_ORG_ID
grep -i 'vercel' .env 2>/dev/null
```

If `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` are both set, export them — CLI skips `.vercel/` directory lookup.

## Deploying

**Quick deploy (have project ID):**
```bash
vercel deploy -y --no-wait
vercel deploy --scope <team-slug> -y --no-wait
```

**Full flow (no project ID — link first):**
```bash
git remote get-url origin 2>/dev/null
cat .vercel/project.json 2>/dev/null || cat .vercel/repo.json 2>/dev/null
vercel link --repo --scope <team-slug> -y   # with git remote
vercel link --scope <team-slug> -y           # without git remote
```

Check status: `vercel inspect <deployment-url>`

Default to preview. Production only when explicitly requested: `vercel deploy --prod -y --no-wait`

## Managing Environment Variables

```bash
echo "value" | vercel env add VAR_NAME --scope <team-slug>
echo "value" | vercel env add VAR_NAME production --scope <team-slug>
vercel env ls --scope <team-slug>
vercel env pull --scope <team-slug>
vercel env rm VAR_NAME --scope <team-slug> -y
```

## Inspecting Deployments

```bash
vercel ls --format json --scope <team-slug>
vercel inspect <deployment-url>
vercel inspect <deployment-url> --logs
vercel logs <deployment-url>
```

## Managing Domains

```bash
vercel domains ls --scope <team-slug>
vercel domains add <domain> --scope <team-slug>
```

## Task

$ARGUMENTS — describe the Vercel operation to perform. Follow the steps above.
