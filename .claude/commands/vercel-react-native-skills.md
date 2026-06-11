React Native and Expo best practices for building performant mobile apps.

## When to Apply

- Building React Native or Expo apps
- Optimizing list and scroll performance
- Implementing animations with Reanimated
- Working with images and media
- Configuring native modules or fonts

## Rules by Priority

### 1. List Performance (CRITICAL)

- `list-performance-virtualize` — Use `FlashList` for large lists (not `FlatList`)
- `list-performance-item-memo` — Memoize list item components with `React.memo`
- `list-performance-callbacks` — Stabilize callback references with `useCallback`
- `list-performance-inline-objects` — Avoid inline style objects in list items
- `list-performance-function-references` — Extract functions outside render
- `list-performance-images` — Optimize images in lists (use `expo-image`)
- `list-performance-item-expensive` — Move expensive work outside item components
- `list-performance-item-types` — Use item types for heterogeneous lists

### 2. Animation (HIGH)

- `animation-gpu-properties` — Animate only `transform` and `opacity` (GPU-accelerated)
- `animation-derived-value` — Use `useDerivedValue` for computed animations
- `animation-gesture-detector-press` — Use `Gesture.Tap` instead of `Pressable` for gestures

### 3. Navigation (HIGH)

- `navigation-native-navigators` — Use native stack and native tabs over JS navigators

### 4. UI Patterns (HIGH)

- `ui-expo-image` — Use `expo-image` for all images (better caching, performance)
- `ui-pressable` — Use `Pressable` over `TouchableOpacity`
- `ui-safe-area-scroll` — Handle safe areas in `ScrollView`s
- `ui-menus` — Use native context menus
- `ui-native-modals` — Use native modals when possible
- `ui-measure-views` — Use `onLayout`, not `measure()`
- `ui-styling` — Use `StyleSheet.create` or Nativewind

### 5. State Management (MEDIUM)

- `react-state-minimize` — Minimize state subscriptions
- `react-state-dispatcher` — Use dispatcher pattern for callbacks
- `react-compiler-destructure-functions` — Destructure for React Compiler compatibility

### 6. Rendering (MEDIUM)

- `rendering-text-in-text-component` — Wrap text in `Text` components
- `rendering-no-falsy-and` — Avoid falsy `&&` for conditional rendering (use ternary)

### 7. Monorepo (MEDIUM)

- `monorepo-native-deps-in-app` — Keep native dependencies in app package, not shared packages
- `monorepo-single-dependency-versions` — Use single versions across packages

### 8. Configuration (LOW)

- `fonts-config-plugin` — Use config plugins for custom fonts
- `imports-design-system-folder` — Organize design system imports
- `js-hoist-intl` — Hoist `Intl` object creation outside render

## Full Rules

Detailed rule files with code examples are in `.agents/skills/vercel-react-native-skills/rules/` and the compiled guide is at `.agents/skills/vercel-react-native-skills/AGENTS.md`.

## Task

Review or write the React Native code specified in `$ARGUMENTS` following the rules above. Start with CRITICAL list performance rules.
