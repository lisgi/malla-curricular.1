# Copilot Instructions for malla-curricular.1

## Overview
This project is a simple, interactive curriculum map (malla curricular) for Medicina UNLP, built as a static web app using only HTML, CSS, and JavaScript. There is no build system, backend, or external dependencies beyond optional browser libraries for graph visualization.

## Key Files
- `index.html`: Main entry point. Loads the grid and includes references to CSS and JS.
- `style.css`: Styles for the curriculum grid, including states for locked and completed subjects.
- `script.js`: Core logic for rendering subjects, handling prerequisites, and tracking user progress via `localStorage`.

## Architecture & Data Flow
- The curriculum is defined as a JavaScript array of subject objects, each with `id`, `nombre`, and `prereqs`.
- On page load, `script.js` dynamically creates a grid of subjects in the DOM.
- Clicking a subject toggles its completion state if prerequisites are met. State is persisted in `localStorage`.
- The UI updates in real time to reflect locked/unlocked/completed states.

## Developer Workflow
- No build step: edit files directly and refresh the browser to see changes.
- To preview, open `index.html` in a browser or use VS Code Live Server.
- No tests or CI/CD are present.

## Project Conventions
- All subject/prerequisite logic is in `script.js`.
- CSS class names: `.subject`, `.locked`, `.completed` control visual state.
- The curriculum array can be swapped for other careers by editing `script.js`.
- No frameworks or modules are used; all code is global-scope vanilla JS.

## Extending/Integrating
- To add graph visualization, use a library like vis-network in `index.html` and adapt the curriculum array.
- To reset progress, clear `localStorage` for the key `progresoMalla`.
- For new features, keep logic in `script.js` and UI in `index.html`/`style.css`.

## Example: Adding a Subject
```js
// In script.js
materias.push({ id: "newsubj", nombre: "Nueva Materia", prereqs: ["mat1"] });
```

## References
- See `README.md` for a brief project description.

---
If you add new features or conventions, update this file to help future AI agents and developers.
