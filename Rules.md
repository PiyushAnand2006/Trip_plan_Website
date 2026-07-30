# Rules

## 1. Libraries
- Use React + Vite by default.
- Use Lucide-react for icons.
- Do not add heavy animation libraries unless requested.
- Avoid adding Redux/pre-optimized state unless explicitly requested.

## 2. Naming & Structure
- Use PascalCase for component folders.
- Use kebab-case for assets.
- Keep components small and responsive.

## 3. Error Handling
- Add `console.error` wrappers in `initPage`-style bootstrap.
- Use try/catch around optional modules.
- Never crash the app if data fetch fails.

## 4. Styling Rules
- Maintain Airbnb-inspired warm system: Rausch Red `#ff385c`, DM Sans, soft shadows.
- Keep page responsive; mobile first where possible.
- Avoid hardcoded colors outside design tokens.

## 5. Content Rules
- Use Unsplash images for mock data.
- Do not expose API keys in frontend.
- Do not commit `.env` files.

## 6. Git Rules
- Create feature branches from `main`.
- Use PR titles in format: `type: short description`.
- Update Memory.md after every significant change.

## 7. Out of Bounds
- Do not implement payment processing without explicit request.
- Do not add analytics/tracking without review.
