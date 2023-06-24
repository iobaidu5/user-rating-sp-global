# Vite React Starter

## Table of Contents

- [Getting Started](#getting-started)
- [VS Code Plugins](#vs-code-plugins)
- [File Structure](#file-structure)
- [Guidelines & Conventions](#conventions)

&nbsp;
<a name="getting-started"></a>

## 🚀 Getting Started

&nbsp;

### Prerequisites

- NodeJS 16
- NPM

&nbsp;

### First Run

### `1. npm install`

Install all the dependencies.

&nbsp;


### `2. npm run build:<environment>`

Build the app using the env file for the environment. eg: `npm run build:local`.\
Available environments: 'local', 'dev', 'staging'.\
Use `npm run build` only for prod.

&nbsp;

### `3. npm run start:<environment>`

Start the app using the env file for the environment. eg: `npm run start:dev`.\
Available environments: 'local', 'dev', 'staging'.\
Use `npm run start` only for prod.

&nbsp;

### `4. npm run test`

#### Lint & Formatting

- ESlint & Prettier Configured
- Lints
  - airbnb
  - react
  - react hooks
  - typescript
  - jsx-a11y
  - jest
  - testing library

### Editor Config

- vscode settings & extension recommendations
- `.editorconfig` file

&nbsp;
<a name="vs-code-plugins"></a>

## 👨🏼‍💻 VS Code Plugins

&nbsp;

### Must

- ES7 React/Redux
- ESLint
- Prettier
- EditorConfig for VS Code
- DotENV
- Tailwind CSS IntelliSense

&nbsp;

### Optionals

- Auto Close Tag
- Auto Rename Tag
- Auto import - ES6
- Path Intellisense
- TODO Highlight

&nbsp;
<a name="file-structure"></a>

## File Structure

Folder structure is based on productivity and some best practices (NextJS, public recommendations, etc):

```text
src
├── App.css                       * Main styles to load or overwrite for any UI components library .
├── App.tsx                       * Main app component.
├── index.css                     * Main app styles and import tailwind base styles.
├── main.tsx                      * Entry point of the application (any initial configuration or plugins).
├── assets                        * Assets that are imported into your components(images, custom svg, etc).
│   └── ...
├── components                    * Components of the projects that are not the main views.
│   ├── ui                        * Generic and reusable across the whole app. Presentational components eg. Buttons, Inputs, Checkboxes.
│   ├── layout                    * Unique and one time use components that will help with app structure (guards, navigation, etc).
│   ├── shared                    * Reusable components across different domains or features.
│   ├── <domain component>        * Belong to a specific domain. Reusable in different Pages.
│   └── ...
├── plugins                       * Init and config plugins(axios, react-query, react-feature-flags, etc).
│   └── ...
├── services                      * All the common services. e.g. Api, hubs, store (redux/context API/ Mobx), etc.
│   ├── api                       * Abstractions for making API requests
│   │    └── base                 * Abstract classes for all the API's.
│   │    └── authentication.ts    * Authentication API for login, reset password, etc.
│   │    └── ...
│   └── context                   * All the Contexts use din the app for Auth, alerts, etc
│        └── ...
├── theme                         * Global/Common styles configuration (variables, main theme, mixins, etc) on Sass/Less.
├── test                          * Utilities, mocks and config files for tests.
├── hooks                         * Custom hooks to isolate reusable logic.
├── models                        * Constructors that will mold incoming and outgoing server data into repeatable and scalable objects.
├── constants                     * Anything referenced globally and no Dynamic information.
├── utils                         * Functions and utilities (for env variables, for tests, for regex value testing, filters, etc.)
├── routes                        * All the possible routes/navigation of the app.
├── pages                         * Presentational components that represents pages/views.
│   ├── private                   * Private views (authenticated user)
│   │    └── ...
│   ├── public                    * Public views (guest user)
│   │    └── ...
│   └── ...                       * Shared views
└── .vscode                       * VS Code workspace settings to work with ESLint rules and formatting
                                    (you can also lint or fix on save 😉).
```

**Some important root/config files**

```text
.
├── src
│   └── jest.setup.ts       * Jest extra configuration.
├── .editorconfig           * Coding styles (also by programming language).
├── .env                    * Environment variables (env.production, env.dev, env.development, env.staging, etc).
├── .eslintrc.json          * ESLint configuration and rules.
├── .prettierrc             * Formatting Prettier options.
├── tsconfig.js             * Typescript configuration.
├── postcss.config.js       * POST CSS configuration.
├── tailwind.config.js      * Tailwind CSS configuration.
├── vite.config.ts          * ViteJS configuration.
└── jest.config.js          * Jest configuration for tests.
```

&nbsp;
<a name="conventions"></a>


### Organization / Best practices

- Use a **central export file** (Barrel export -> `index.ts`) in the components directory. With this file we can just import all of our components into it and export them. This will allow us to import components into any file from the same place.
- **Group components** by `module/feature` inside `components folder`.
- Keep **generic components** by context inside `src/components/ui` or `src/components/layout`.
- **Keep pages simple**, with minimum structure and code.
- Group pages accordingly to route definition. For a route `/user/list` we would have a page located at `/src/pages/User/List.jsx`.
