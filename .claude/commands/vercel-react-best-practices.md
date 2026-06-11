React and Next.js performance optimization guidelines from Vercel Engineering. Apply when writing, reviewing, or refactoring React/Next.js code.

## Rule Categories by Priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Eliminating Waterfalls | CRITICAL | `async-` |
| 2 | Bundle Size Optimization | CRITICAL | `bundle-` |
| 3 | Server-Side Performance | HIGH | `server-` |
| 4 | Client-Side Data Fetching | MEDIUM-HIGH | `client-` |
| 5 | Re-render Optimization | MEDIUM | `rerender-` |
| 6 | Rendering Performance | MEDIUM | `rendering-` |
| 7 | JavaScript Performance | LOW-MEDIUM | `js-` |
| 8 | Advanced Patterns | LOW | `advanced-` |

## Critical Rules (apply first)

### Eliminating Waterfalls
- `async-parallel` — Use `Promise.all()` for independent async operations
- `async-defer-await` — Move `await` into branches where actually used
- `async-cheap-condition-before-await` — Check cheap sync conditions before awaiting flags
- `async-suspense-boundaries` — Use Suspense to stream content
- `async-api-routes` — Start promises early, await late in API routes

### Bundle Size
- `bundle-barrel-imports` — Import directly, avoid barrel files (`import { X } from 'lib'` not `import 'lib'`)
- `bundle-dynamic-imports` — Use `next/dynamic` for heavy components
- `bundle-analyzable-paths` — Prefer statically analyzable import paths
- `bundle-defer-third-party` — Load analytics/logging after hydration
- `bundle-conditional` — Load modules only when feature is activated

## High-Impact Rules

### Server-Side
- `server-cache-react` — Use `React.cache()` for per-request deduplication
- `server-cache-lru` — Use LRU cache for cross-request caching
- `server-parallel-fetching` — Restructure components to parallelize fetches
- `server-hoist-static-io` — Hoist static I/O (fonts, logos) to module level
- `server-no-shared-module-state` — Avoid module-level mutable request state in RSC/SSR
- `server-after-nonblocking` — Use `after()` for non-blocking operations

### Re-render Optimization
- `rerender-memo` — Extract expensive work into memoized components
- `rerender-dependencies` — Use primitive dependencies in effects
- `rerender-derived-state-no-effect` — Derive state during render, not effects
- `rerender-no-inline-components` — Don't define components inside components
- `rerender-memo-with-default-value` — Hoist default non-primitive props
- `rerender-functional-setstate` — Use functional setState for stable callbacks

### Rendering
- `rendering-conditional-render` — Use ternary, not `&&` for conditionals
- `rendering-hoist-jsx` — Extract static JSX outside components
- `rendering-activity` — Use Activity component for show/hide

## JavaScript Performance
- `js-index-maps` — Build `Map` for repeated lookups
- `js-set-map-lookups` — Use `Set`/`Map` for O(1) lookups
- `js-early-exit` — Return early from functions
- `js-combine-iterations` — Combine multiple filter/map into one loop

## Full Rules

Detailed rule files with code examples are in `.agents/skills/vercel-react-best-practices/rules/` and the compiled guide is at `.agents/skills/vercel-react-best-practices/AGENTS.md`.

## Task

Review or write the code specified in `$ARGUMENTS` (or describe what you're building) following the rules above. Start with CRITICAL rules, then HIGH.
