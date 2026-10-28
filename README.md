# SkillMesh

SkillMesh is a front-end prototype for discovering collaborators and forming project teams. It uses HTML, CSS, JavaScript, and browser localStorage.

## Run the project

1. Open this folder in VS Code.
2. Run `index.html` with the Live Server extension (recommended).
3. Use the sidebar to explore Overview, Discover talent, Team matches, My teams, Messages, Skill graph, Availability, Portfolio studio, and My profile.

## Folder structure

```text
skillmesh/
├── index.html
├── style.css
├── script.js                 # Original monolithic file kept as a backup
├── README.md
├── auth/
│   ├── index.html
│   ├── auth.css
│   └── auth.js
└── js/
    ├── app.js                # Script loading entry point and event listeners
    ├── state.js              # Shared app state initialization
    ├── data/
    │   └── seed.js           # Demo people and default state
    ├── pages/                # Page-specific HTML renderers
    │   ├── shared.js
    │   ├── dashboard.js
    │   ├── discover.js
    │   ├── matches.js
    │   ├── teams.js
    │   ├── messages.js
    │   ├── skills.js
    │   ├── calendar.js
    │   ├── portfolio.js
    │   └── profile.js
    ├── controllers/
    │   ├── navigation.js
    │   └── actions.js
    └── utils/
        ├── helpers.js
        └── storage.js
```

## Architecture notes

- The existing `style.css` and dashboard HTML structure are preserved.
- JavaScript is divided into smaller **classic scripts** that share the same page scope. `index.html` loads them in dependency order; do not add `type="module"` to these script tags without converting the code to ES modules.
- The root `script.js` is retained as a backup and is no longer loaded by `index.html`. Do not load both the backup and the new `js/` scripts, because that would register handlers twice.
- This is a front-end demo. Profile data, teams, and messages are stored in the current browser using `localStorage`; they are not shared between devices.
