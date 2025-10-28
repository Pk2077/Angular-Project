# Angular Movie Browsing Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Documentation

- **[What I Can Do - AI Capabilities](CAPABILITIES.md)** - Learn about what the AI coding assistant can help you with in this repository
- **[What You Can Do - User Guide](USER_GUIDE.md)** - User-facing guide explaining the application features

## About This Application

A movie browsing application built with Angular 16 that allows users to:
- Browse trending, theatre, and popular movies
- View detailed movie information
- Rate movies with a star rating system
- Authenticate with a login system

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

### About GitHub Actions and Jekyll

If GitHub shows "Actions is currently unavailable for your repository, and your Pages site requires a Jekyll build step", that means GitHub is warning that a Jekyll build would normally be needed, and Actions (to run a build) are not enabled for your repo. There are two simple options:

1. Enable GitHub Actions for your repository. This allows automated CI builds to run on push, including workflows that build and publish to GitHub Pages. See GitHub docs to enable Actions in your repository Settings -> Actions.

2. Use a pre-built deployment (no Actions required): our `deploy` script uses the `gh-pages` package to push the already-built static files to the `gh-pages` branch. To prevent GitHub from running Jekyll on those files, we create a `.nojekyll` file during build. The `postbuild` step writes `dist/project/.nojekyll` so Pages will serve the static files directly.

Both approaches are valid; using `gh-pages` and `.nojekyll` is simplest if you prefer a local/manual deploy or do not want to enable Actions.
