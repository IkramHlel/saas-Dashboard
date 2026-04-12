# Metrico

Metrico is a SaaS-style dashboard built with React and TypeScript.  
It focuses on clean UI structure, reusable components, and modern frontend patterns like TanStack Query and Redux Toolkit.

This project was mainly built to practice real-world frontend architecture (state management, API layer design, and scalable UI structure).

## Tech Stack

- React 
- TypeScript
- CSS Modules
- TanStack Query (React Query)
- Redux Toolkit
- MSW (Mock API server)
- Vite 
- Vitest
- Testing Library

## Project Structure


src/
├── components/    # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom hooks
├── store/         # Redux store and slices
├── services/      # API services and queries
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
├── styles/        # Global styles
├── mocks/         # MSW handlers and server
├── tests/         # Test files
└── assets/        # Static assets


## Getting Started

1. Install dependencies:
   npm install

2. Start development server:
   npm run dev

3. Build for production:
   npm run build

4. Run tests:
   npm run test

## Mock APIs

The project uses MSW to mock backend APIs. Handlers are defined in `src/mocks/handlers.ts`.

The mock server starts automatically when running the dev server.

## Architecture

- State Management: Redux Toolkit for global state, TanStack Query for server state
- Styling: CSS Modules for component-scoped styles
- Data Fetching: TanStack Query with optimistic updates and caching
- Testing: Vitest with Testing Library for unit and integration tests
- Mocking: MSW for API mocking during development

## About this project

This project reflects my approach to building scalable and maintainable frontend applications using React and TypeScript.

It highlights my experience working on production-style architectures, with a focus on:

- scalable component and folder structure
- clean API state management with TanStack Query
- predictable global state handling with Redux Toolkit
- strong TypeScript usage for reliable and maintainable code



