# Chris Whited ThisDotLabs Test

The purpose of this application is to create a GitHub API User Search clone.

To achieve this, the app utilizes the [apollo angular](https://www.apollographql.com/docs/angular/) library to create a
`GraphQL` API to communicate with the [GitHub GraphQL v4 API](https://developer.github.com/v4/) to search for users.

In order to make the connection to the `GitHub GraphQL API`, an access token is required. To achieve this, authenticating
with GitHub credentials is required. To create a client that can authenticated with GitHub credentials, I created an
[auth0](https://auth0.com/) account, created a Single Page Application instance, and configured it to have access to `GitHub`.
With the [auth0-js](https://auth0.com/docs/libraries/auth0js/v9) library, this allows for authenticating to `auth0` using
`GitHub` account credentials, once this authentication is successful, it gets the user data which has the necessary `GitHub`
access token which can then be used to connect to the `GitHub API` and search for the users.

The authentication flow utilizes [NgRx](https://ngrx.io) to maintain the application auth state of the authenticated user.

## Angular Cli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
