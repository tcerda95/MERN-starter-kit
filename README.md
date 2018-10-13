# MERN starter kit

This starter project provides the base elements needed to create an application using the MERN stack:
* [MongoDB](https://www.mongodb.com/) 
* [ExpressJS](http://expressjs.com/)
* [React](https://reactjs.org/)
* [Node](https://nodejs.org)

Test libraries:
* [Jest](https://jestjs.io/)
* [Sinon](https://sinonjs.org)
* [Enzyme](https://airbnb.io/enzyme/)

Additional integrations are provided:
* [react-i18next](https://react.i18next.com/)
* [React Router](https://reacttraining.com/react-router/)
* [log4js](https://github.com/stritti/log4js)

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Prerequisites

It is necessary to have Node installed as well as a MongoDB instance up and running as a background process.

## Project Structure

The project is divided by the `/server` directory where you can find everything related to backend development such as exposing or consuming an API, querying a DB, etc.

The `/src` directory contains everything related to frontend development.

Finally, the `/public` directory contains static resources such as `favicon.ico` and the translation files provided inside the `locales` directory.

## Getting Started

1. Download or clone repository:

    ```bash
    git clone --depth=1 https://github.com/tcerdaITBA/MERN-starter-kit.git your-project-name
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run project in development mode provided with hot reload:

    ```bash
    npm run dev
    ```

## Scripts

The scripts may be shown at any time with the `npm run` command. Overview:

1. run dev mode: 
    ```bash
    npm run dev
    ```
    Runs the Node server at port 3000 and React App at port 3100 with hot reload as well as lint and test watchers. 
    
2. test:
    ```bash
    npm test
    ```
    Runs the project's lint and tests. Run with npm run test:watch in order to run jest interactive test watcher.
	
3. lint: 
    ```bash
    npm run lint 
    ```
    Runs the project's lint. Run `npm run lint:fix` in order to automatically fix errors. 
	
4. build: 
    ```bash
    npm run build
    ```
    Builds the project creating a build directory. 
