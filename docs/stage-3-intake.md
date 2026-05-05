# Stage 3 Intake

## Goal

Define TypeScript content types and prepare structured content files for MVP pages.

## Definition of Done

- Shared content types are defined in `src/types/content.ts`.
- Content files are available for FAQ, reviews, symptoms, brands, and error codes.
- Content can be imported from `src/content/index.ts`.
- Basic lookup helpers exist for future dynamic page templates.
- `npm run lint`, `npm run format:check`, and `npm run build` pass.

## Constraints

- Do not create page templates or routes for this stage.
- Do not implement metadata generation, sitemap, robots, analytics, or forms.
- Do not introduce a CMS, database, MDX, or runtime content loader.
