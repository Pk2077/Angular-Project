# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Publish to GitHub Pages

You can publish this Angular app to GitHub Pages using the `gh-pages` package.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build and deploy:

   ```bash
   # This runs the production build with the correct base-href and then
   # deploys the contents of dist/project to the gh-pages branch using the
   # gh-pages package.
   npm run predeploy
   npm run deploy
   ```

3. After a successful deploy, enable GitHub Pages for the repository (if not auto-enabled) in the repository Settings -> Pages and choose the `gh-pages` branch.

Notes:

- The app project name is `project` and the production build output is `dist/project`.
- If you publish under a custom repository name, update the `--base-href` in the `predeploy` script accordingly (for example `/your-repo-name/`).
