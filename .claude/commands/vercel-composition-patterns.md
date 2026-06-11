React composition patterns that scale. Apply when refactoring components with boolean prop proliferation, building flexible component libraries, or designing reusable APIs.

## When to Apply

- Refactoring components with many boolean props
- Building reusable component libraries
- Designing flexible component APIs
- Reviewing component architecture
- Working with compound components or context providers

## Rules by Priority

### 1. Component Architecture (HIGH)

**`architecture-avoid-boolean-props`** — Don't add boolean props to customize behavior; use composition.

❌ `<Button isLoading isPrimary isDisabled />`
✅ `<Button variant="primary"><Spinner /></Button>`

**`architecture-compound-components`** — Structure complex components with shared context.

```jsx
// Compound component pattern
<Select>
  <Select.Trigger />
  <Select.Options>
    <Select.Option value="a">A</Select.Option>
  </Select.Options>
</Select>
```

### 2. State Management (MEDIUM)

**`state-decouple-implementation`** — Provider is the only place that knows how state is managed.

**`state-context-interface`** — Define generic interface with state, actions, meta for dependency injection.

**`state-lift-state`** — Move state into provider components for sibling access.

### 3. Implementation Patterns (MEDIUM)

**`patterns-explicit-variants`** — Create explicit variant components instead of boolean modes.

❌ `<Button loading={true} />`
✅ `<LoadingButton />`

**`patterns-children-over-render-props`** — Use children for composition instead of `renderX` props.

❌ `<List renderItem={(item) => <Item {...item} />} />`
✅ `<List>{items.map(item => <Item key={item.id} {...item} />)}</List>`

### 4. React 19 APIs (MEDIUM)

> **React 19+ only.** Skip if using React 18 or earlier.

**`react19-no-forwardref`** — Don't use `forwardRef`; pass `ref` as a regular prop. Use `use()` instead of `useContext()`.

## Full Rules

Detailed rule files with code examples are in `.agents/skills/vercel-composition-patterns/rules/` and the compiled guide is at `.agents/skills/vercel-composition-patterns/AGENTS.md`.

## Task

Review or refactor the code specified in `$ARGUMENTS` following these composition patterns.
