# AGENTS.md

## Stack
Vue 3.5 + TypeScript 6 + Vite 8. Single app, no monorepo.

## Commands

```
npm run dev       # dev server
npm run build     # typecheck (vue-tsc) then vite build
npm run preview   # preview production build
```

No test runner, linter, or formatter configured yet.

## Structure
- `src/main.ts` — entry point, mounts `App.vue` on `#app`
- `src/App.vue` — root component (`<script setup lang="ts">`)
- `src/style.css` — global styles (cleaned, no Vite template styles)
- `vite.config.ts` — default config, only `@vitejs/plugin-vue`

## Conventions
- Vue SFCs use `<script setup lang="ts">`
- TypeScript project references: `tsconfig.app.json` (app) + `tsconfig.node.json` (build tools)
- `"type": "module"` in package.json — use ESM imports
