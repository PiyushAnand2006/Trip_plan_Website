# Memory

## Current Status
- `travel_booking` scaffold complete with PRD/Architecture/Rules/Phases/Design docs.
- React frontend builds successfully.
- Dev server verified at `http://localhost:5173` returning `200` with expected HTML shell.

## Key Decisions
- Static data stays in `frontend/src/data/*.js`.
- Airbnb warm styling lives in `app.css`.
- Backend remains minimal until booking/auth phases.

## Known Issues
- Defer visual UI refinement until user review.
- Carousel arrows and filter behavior remain static in UI.
- Destination cards are hardcoded in `Home.jsx` rather than mapped from data.

## Next Steps
- Review rendered UI and refine components.
- Add simple carousel/filter handler wiring.
- Proceed with backend API routes per Phases.md.
