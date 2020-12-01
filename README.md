# Angular Headless CMS Ecommerce  

## Description
---
Ecommerce JAMstack web app made with a headless CMS backend and Angular frontend. Made with a Sanity ecommerce template (headless CMS) and Snipcart for ecommerce and shopping cart features. 

Netlify was used to host the angular frontend and Sanity (Headless CMS UI and Backend) as a proxy between the two. The Netlify file has build and dev commands properties and a JS function that fetches products in the CMS for the Angular frontend.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

- [Sanity](https://www.sanity.io/)
- [Snipcart](https://snipcart.com/)
- Netlify CLI 

## Development server
---
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Sanity Content Studio
Run `sanity start` for content server. Navigate to `http://localhost:3333/`. Or you can deploy the Sanity CMS with `sanity deploy`. More details [here](https://www.sanity.io/docs/deployment).


## Netlify deployment configuration
---
### Getting started
Install the netlify CLI to your node modules globally or locally if it isnt installed. Add your netlify.toml file to the your angular project directory.

`netlify init`
 you can initialize a site that has a remote repository in GitHub or create and deploy the site manually.

The first option allows for Netlify Continuous deployment to build branch & PR previews.
For more details on Netlify CI checkout the docs: http://bit.ly/2N0Jhy5


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---
## References
---
#### [What is JAMstack](https://jamstack.wtf/)
A web development architecture composed of client-side JavaScript, reusable APIs and prebuilt Markup templates (e.g. static website generators)
    
- [More info](https://jamstack.org/)
