# Capstone Project

The project provides example how to implement microfrontend architecture using module federation with vite.

## Structure

The example has 2 remote projects (fibonacci and pow) and 1 host project (core). Core project maintenances the template of an application and imports remote projects to use them as separate pages. Host projects expose index component for importing.

## Installation & Run

1. Run core project
   1. Go to core dir
   2. Run `yarn install`
   3. Run `DEV_HOST=127.0.0.1 DEV_PORT=3000 yarn start`
1. Run core fibonacci
   1. Go to fibonacci dir
   2. Run `yarn install`
   3. Run `DEV_HOST=127.0.0.1 DEV_PORT=3001 yarn start`
1. Run core pow
   1. Go to pow dir
   2. Run `yarn install`
   3. Run `DEV_HOST=127.0.0.1 DEV_PORT=3002 yarn start`
1. Open `localhost:3000` in browser

// TODO: describe CI/CD
