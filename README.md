# Support Request Tracker

A support request application built with React and TypeScript,
with a planned C#/.NET API and SQL database.

The project explores request workflows, accessible interfaces,
API development, testing and deployment.

## Live demo

[Try Support Request Tracker](https://wemiibidun.github.io/support-request-tracker/)

Use fictional information when trying the demo.

## Current features

- Create a request with a title, description and priority.
- View submitted requests, newest first.
- Reject empty or whitespace-only titles and descriptions.
- Display confirmation after submission.
- Use a responsive layout with labelled form controls and visible keyboard focus.

## Current limitations

This is an early frontend prototype.

- Requests are stored in React state and disappear on refresh.
- Every new request has an Open status.
- There is no backend, database or authentication yet.
- Requests are not shared between visitors.
- Automated behaviour tests have not been added yet.

## Technology

- React
- TypeScript
- Vite
- CSS
- ESLint
- GitHub Actions
- GitHub Pages

## Run locally

Prerequisites:

- Node.js 22.14.0 or a compatible version meeting Vite's requirements
- npm
- Git

Clone the repository:

    git clone https://github.com/wemiibidun/support-request-tracker.git
    cd support-request-tracker/frontend

Install dependencies and start the development server:

    npm ci
    npm run dev

Open the local URL printed in the terminal. The application uses
the `/support-request-tracker/` base path for GitHub Pages hosting.

## Quality checks

Run these commands from the `frontend` directory:

    npm run lint
    npm run build

Lint checks code against the configured ESLint rules.
Build runs the TypeScript build checks and creates production assets.

These checks do not replace behaviour or accessibility testing.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in
`.github/workflows/deploy.yml`.

The workflow installs dependencies, runs lint and build checks,
then publishes `frontend/dist` to GitHub Pages.

GitHub Pages hosts the frontend. The planned .NET API and database
will require separate hosting.

## Project structure

- `frontend/` — React and TypeScript application
- `frontend/src/App.tsx` — Request form and list
- `frontend/src/App.css` — Application styles
- `frontend/src/index.css` — Global styles
- `.github/workflows/deploy.yml` — Checks and Pages deployment

## Roadmap

- [x] Create and display requests
- [x] Add responsive styling
- [x] Deploy a live frontend demo
- [ ] Add Open, In Progress and Resolved statuses
- [ ] Add filtering and sample requests
- [ ] Build a C#/.NET API
- [ ] Persist requests in a SQL database
- [ ] Add authentication and authorisation
- [ ] Add automated tests
- [ ] Deploy the backend
- [ ] Write API documentation and setup guides

## Implementation notes

TypeScript defines the request structure and allowed priorities.
Form values are trimmed before submission, and new requests are
added using a functional state update.

The current interface stays small while the request workflow is
developed. Components and data access will be separated as
functionality grows.
