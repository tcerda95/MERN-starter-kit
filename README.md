# MERN starter

This starter project provides the base elements needed to create an application using the MERN stack (MongoDB, ExpressJS, a React front end and a Node backend).

## Getting Started

If you have already installed the IBM Cloud Developer Tool (IDT), that's the place to start.  It's an easy one command install; instructions are here:  [IDT Install Instructions](https://github.com/IBM-Cloud/ibm-cloud-developer-tools)

Note IDT build and runs the project using Docker containers.  This is recommended for cloud native development. However, direct use of native tools (e.g. npm) is also supported.  See the 'Using Native Tools' appendix at the end of this read me for further details. 


## Dev mode vs release mode 

The starter project supports the concept of dev mode and release mode.  In dev mode, the starter app runs with dev dependencies installed and hot reload enabled for both the frontend and backend aspects of the app.  Dev mode is intended for use during app development. Release mode exclude dev dependencies and runs the app without hot reload. Release mode is intended for running in production. 

## Working in Dev Mode 

1. build project with command: 

    ```
    idt build --debug
    ```    
    This installs all dependencies, including dev dependencies. 
    
2. run project test cases with command:
    ```
    idt test
    ```
	This runs the project's unit tests with mocha. 
	
3. run the app in dev mode with command: 
    ```
    idt shell run-dev 
    ```
	This runs the app in dev mode.  A development web server runs on port 3000 and the app itself runs on port 3100.  These web server and app will automatically reload if changes are made to the source.
	
4. run the app in interactive debug mode with command: 
    ```
    idt debug
    ```
	This runs the app interactive debug mode.  The app listens on port 5858 for the debug client to attach to it, and on port 3000 for app requests. 

## Working in Release Mode 

1. build project
	```
	idt build 
	``` 
	Builds project using 'Dockerfile-tools'.  Effectively equivalent to 'idt build --debug'.
	
2. run project 
	```
	idt run 
	```
	Runs project using release image (builds on fly using 'Dockerfile').  Hot reload is not available in the release image. 

## Project default URLs 

Whether you run in dev mode or release mode, you have the same default URLs available to you: 

1. http://localhost:3000
2. http://localhost:3000/appmetrics-dash
3. http://localhost:3000/explorer
4. http://localhost:3000/health
5. http://localhost:3000/swagger/api

## Deployment 

These projects are designed for deployment through the IDT CLI to the IBM Cloud, to either Kubernetes (public or private cloud) or Cloud Foundry (public cloud only).  

To deploy app: 

	```
	idt deploy [--target container]
	```

Deploys app to Cloud Foundry by default or to Kubernetes (on IBM Cloud) if you specify the --target option.  

Deployment to other environments is possible using native commands. See the 'Using Native Tools' appendix at the end of this read me for further details. 

## Native Commands Appendix 

This section specifies how to use native commands to do development on this project outside of containers and without the IDT CLI. 

Note, when running the project with native commands in either dev or release mode, you must provide your own mongo server.  See Mongo section below for details.

### Working in Dev Mode 

1. build project with command: 
    ```
    npm install
    ```    
    This installs all dependencies, including dev dependencies. 
    
2. run project test cases with command:
    ```
    idt test
    ```
	This runs the project's unit tests with mocha. 
	
3. run the app in dev mode with command: 
    ```
    npm run dev 
    ```
	This runs the app in dev mode.  A development web server runs on port 3000 and the app itself runs on port 3100.  These web server and app will automatically reload if changes are made to the source.
	
4. run the app in interactive debug mode with command: 
    ```
    npm run debug
    ```
	This runs the app interactive debug mode.  The app listens on port 5858 for the debug client to attach to it, and on port 3000 for app requests.

### Working in Release Mode 

1. build project
	```
	npm install --only=dev; npm run build; npm prune --production 
	``` 
	Upon completion, webpack has been run and dev dependencies removed.
	
2. run project 
	```
	npm start  
	```
	  Runs app in release mode. App listens on port 3000. Hot reload is not available in this mode.
   
### Mongo 

Since this project connects to a running Mongo server, you must provide one when working with native commands.  Install instructions are here:  

https://docs.mongodb.com/manual/administration/install-community/
 
### Configuration

The project's access to Mongo is controlled through these environment variables with their default values shown: 

MONGO_URL='localhost:27017';
MONGO_USER='';
MONGO_PASS='';
MONGO_DB_NAME='';

### Deployment 

You can install and run your app on bare metal or virtual machine environments conventionally: 

```
1. delete node_modules 
2. create app archive (e.g. zip up directory)
3. copy to target machine
4. unwind (e.g. unzip archive) 
5. npm install
6. npm start 
```

You can deploy to Cloud Foundry using: 
```
cf push 
```
You can deploy to Kubernetes using: 
```
1. docker build -p 3000:3000 --name <name> . 
2. publish image to target registry (e.g. dockerhub)
2. helm install chart/<project name>
```
For Helm deployment, make sure to review variables.yaml in your project's chart to ensure suitable values for your deployment, including your image name and location. 

### Running application

Once you have deployed your application successfully into your Kubernetes cluster. You can test your application by retrieving the IP address of your worker nodes.

1. Run the following command to find out what is the public address of your worker nodes

```
$ bx cs workers <clusterName>
```

2. To get the port for your particular application run the following command

```
$ kubectl get services
```

**Note:** In the column labeled ports you will see two numbers and the protocol (TCP/UDP) The port number on the left is the internal / guest port from the container. The port number on the right is the external port that you will use to access your application.

3. Once you have your public IP address and port enter that in your browser to view your application.