# Architecture

## 1. Overall Architecture
MVP is a static React frontend plus a small Express backend scaffold. Frontend reads local JSON/JS data; backend exposes API endpoints for future expansion.

```
travel_booking/
├── backend/
│   ├── server.js
│   ├── routes/
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TopNav/
│   │   │   ├── Hero/
│   │   │   ├── TopPicks/
│   │   │   ├── Search/
│   │   │   ├── FilterChip/
│   │   │   ├── PackageCard/
│   │   │   ├── HotelCard/
│   │   │   ├── DestinationCard/
│   │   │   ├── TestimonialCard/
│   │   │   ├── Footer/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   ├── data/
│   │   │   ├── packages.js
│   │   │   ├── hotels.js
│   │   │   ├── destinations.js
│   │   │   ├── testimonials.js
│   │   └── assets/styles/
│   ├── package.json
│   └── ...
├── PRD.md
├── Architecture.md
├── Rules.md
├── Phases.md
├── Design.md
├── Memory.md
└── package.json
```

## 2. Technical Stack
### Frontend
- React + Vite
- CSS modules or plain CSS under `assets/styles/`
- Lucide-react icons

### Backend
- Express (Node.js)
- CORS enabled
- JWT auth scaffold (Phase later)

### DevOps
- Git, GitHub CLI for PRs
- Prettier + ESLint

## 3. Data Flow
- Homepage reads from `src/data/*.js` arrays.
- Future: `GET /api/packages` and `POST /api/book` replace static arrays.

## 4. Ports
- Frontend: 5173
- Backend: 3001

## 5. Constraints
- Keep single-page feel for MVP.
- Avoid heavy frameworks until validated.
