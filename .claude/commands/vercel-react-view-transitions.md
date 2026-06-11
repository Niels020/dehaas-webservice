Guide for implementing smooth, native-feeling animations using React's View Transition API (`<ViewTransition>`, `addTransitionType`, CSS view transition pseudo-elements).

Use when the user wants page transitions, animated route changes, shared element animations, enter/exit animations, list reorder animations, or directional navigation animations.

## Availability

- **Next.js:** Do NOT install `react@canary` — App Router already bundles React canary internally. `ViewTransition` works out of the box.
- **Without Next.js:** Install `react@canary react-dom@canary`
- Browser support: Chromium 111+, Firefox 144+, Safari 18.2+. Graceful degradation.

## When to Animate (priority order)

| Priority | Pattern | What it communicates |
|----------|---------|---------------------|
| 1 | **Shared element** (`name`) | "Same thing — going deeper" |
| 2 | **Suspense reveal** | "Data loaded" |
| 3 | **List identity** (per-item `key`) | "Same items, new arrangement" |
| 4 | **State change** (`enter`/`exit`) | "Something appeared/disappeared" |
| 5 | **Route change** (layout-level) | "Going to a new place" |

Implement ALL applicable patterns. Only skip if the app has no use case for it.

## Core API

```jsx
import { ViewTransition } from 'react';

<ViewTransition>
  <Component />
</ViewTransition>
```

React auto-assigns `view-transition-name` and calls `document.startViewTransition` internally. **Never call `startViewTransition` yourself.**

Only `startTransition`, `useDeferredValue`, or `Suspense` activate VTs. Regular `setState` does not animate.

## Choosing Animation Style

| Context | Animation |
|---------|-----------|
| Hierarchical navigation (list → detail) | Type-keyed `nav-forward` / `nav-back` |
| Lateral navigation (tab-to-tab) | Bare `<ViewTransition>` (fade) or `default="none"` |
| Suspense reveal | `enter`/`exit` string props |
| Background refresh | `default="none"` |

## Transition Types

```jsx
import { startTransition, addTransitionType } from 'react';

startTransition(() => {
  addTransitionType('nav-forward');
  router.push('/detail/1');
});

<ViewTransition
  enter={{ 'nav-forward': 'slide-from-right', 'nav-back': 'slide-from-left', default: 'none' }}
  exit={{ 'nav-forward': 'slide-to-left', 'nav-back': 'slide-to-right', default: 'none' }}
  default="none"
>
  <Page />
</ViewTransition>
```

**TypeScript:** `ViewTransitionClassPerType` requires a `default` key.

`router.back()` and browser back button do **not** trigger view transitions. Use `router.push()` instead.

## Shared Element Transitions

```jsx
// List view
<ViewTransition name={`item-image-${item.id}`}>
  <img src={item.thumbnail} />
</ViewTransition>

// Detail view — same name
<ViewTransition name={`item-image-${item.id}`}>
  <img src={item.full} />
</ViewTransition>
```

Only one VT with a given `name` can be mounted at a time. Use unique names per item.

## Common Patterns

```jsx
// Enter/exit
{show && (
  <ViewTransition enter="fade-in" exit="fade-out"><Panel /></ViewTransition>
)}

// List reorder
{items.map(item => (
  <ViewTransition key={item.id}><ItemCard item={item} /></ViewTransition>
))}

// Suspense reveal
<ViewTransition>
  <Suspense fallback={<Skeleton />}><Content /></Suspense>
</ViewTransition>

// Nested: list identity + shared element
{items.map(item => (
  <ViewTransition key={item.id}>
    <Link href={`/items/${item.id}`}>
      <ViewTransition name={`item-image-${item.id}`} share="morph">
        <Image src={item.image} />
      </ViewTransition>
    </Link>
  </ViewTransition>
))}
```

## Critical Rules

- Use `default="none"` liberally — without it, every VT fires cross-fade on every transition
- Always pair `enter` with `exit`
- Place directional VTs in page components, not layouts
- `<ViewTransition>` only activates enter/exit if it appears **before any DOM nodes** (not wrapped in a div)
- Always add reduced motion CSS from `references/css-recipes.md` to global stylesheet

## CSS Pseudo-Elements

```css
::view-transition-old(.class-name) { /* outgoing */ }
::view-transition-new(.class-name) { /* incoming */ }
::view-transition-group(.class-name) { /* container */ }

@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*),
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation: none !important;
  }
}
```

## Reference Files

Full patterns, CSS recipes, Next.js integration, and implementation workflow:
`.agents/skills/vercel-react-view-transitions/references/`
`.agents/skills/vercel-react-view-transitions/AGENTS.md`

## Task

Add view transitions to the code or route specified in `$ARGUMENTS`. Follow the implementation order: audit existing transitions → add shared elements → add Suspense reveals → add route change transitions. Use reference files for CSS recipes.
