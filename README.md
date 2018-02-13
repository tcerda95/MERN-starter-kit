# MERN starter kit

This starter project provides the base elements needed to create an application using the MERN stack ([MongoDB](https://www.mongodb.com/), [ExpressJS](http://expressjs.com/), a [React](https://reactjs.org/) front end and a [Node](https://nodejs.org) backend) backed by a [Cloud Foundry](https://www.cloudfoundry.org/get-started/) PaaS for deployment.

## Getting Started

1. Install dependencies:

    ```
    npm install
    ```

2. Set the mongoDB cloud foundry service name in [local.json](server/config/local.json) and [db.js](server/model/db.js). For example, is the service is called `compose-for-mongodb`:

    local.json:

    ```json
    {
      "services": {
        "compose-for-mongodb": [{
            "credentials": {"uri": "mongodb://localhost/test"}
        }]
      }
    }
    ```

    The uri is the path to a development mongo database.

    db.js:

    ```javascript
    const { credentials } = services['compose-for-mongodb'][0];
    ```

3. Run project:

    ```
    npm run dev
    ```

## Deployment 

These projects are designed for deployment through Cloud Foundry.  

To deploy app configure the corresponding *manifest.yml* and execute: 

```
npm run build
cf push
```

More at https://docs.cloudfoundry.org/deploying/index.html.

## Scripts

The scripts may be shown at any time with the `npm run` command. Overview:

1. run dev mode: 
    ```
    npm run dev
    ```
    Runs the Node server at port 3000 and React App at port 3100 with hot reload as well as lint and test watchers. 
    
2. test:
    ```
    npm test
    ```
    Runs the project's lint and tests. Run with npm run test:watch in order to run jest interactive test watcher.
	
3. lint: 
    ```
    npm run lint 
    ```
    Runs the project's lint. Run `npm run lint:fix` in order to automatically fix errors. 
	
4. build: 
    ```
    npm run build
    ```
    Builds the project creating a build directory. 
