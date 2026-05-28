# Ad Insights Platform

Ongoing full stack project to create ad insights for particular user needs. Built with Spring Boot 3, React + Vite, PostgreSQL, and Docker.

---

## Frontend — React + Vite

### Architecture

Feature-based architecture. Code is organised around domain features rather than technical type. Each feature is self-contained with its own components, hooks, API calls, and types. Cross-feature utilities and UI primitives live in a shared layer.

Built with Chakra UI and D3 for map visualisation.

### Project Structure

```
src/
├── app/                    # App entry, router, global providers
├── pages/                  # Route-level components, compose features into layouts
├── features/               # One folder per domain feature
│   └── auth/               # Example feature
│       ├── api/            # API calls for this feature only
│       ├── components/     # UI components specific to this feature
│       ├── hooks/          # React hooks for this feature
│       ├── types.ts        # TypeScript types scoped to this feature
│       └── index.ts        # Public API — only what this file exports can be used outside the feature
└── shared/                 # Truly cross-feature code
    ├── api/                # Base API client and configuration
    ├── assets/             # Static assets
    ├── components/         # Reusable UI primitives (buttons, modals etc)
    └── styles/             # Theme and global styles
```

> Features cannot import from other features. They may only import from `shared/`.

---

## Backend — Spring Boot + PostgreSQL

### Architecture

Standard layered architecture. Each layer has a single responsibility and only communicates with the layer directly below it.

### Layers

| Layer | Responsibility |
|---|---|
| **Controllers** | HTTP layer — defines endpoints, handles requests and responses |
| **Services** | Business logic — the core rules and behaviour of the application |
| **Repositories** | Data access — all database interaction goes through here |
| **Models** | Domain entities — defines the structure of database tables via JPA |

### Project Structure

```
src/main/java/com/adinsights/
├── controllers/
├── services/
├── repositories/
└── models/
```