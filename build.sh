#!/bin/sh

npm install --only=dev 
npm run build 
npm prune --production