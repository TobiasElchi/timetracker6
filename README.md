# README
## Task-Tracker

- This project contains of a task tracking application. It supports CRUD functionality with classes Task, Tracking and Label.

## Technologies used:
- React
- Typescript
- nodejs
- express
- Apollo client
- GraphQL
- MySQL

## Setup:
Create database connection to root/localhost (backend will be using port 3001 and frontend will be using port 3000 by default). Change Username and password in backend/src/index.ts accordingly.
- backend>yarn init
- backend>yarn add typescript ts-node express cors nodemon graphql
- backend> yarn add @types/node @types/cors @types/express
- frontend>yarn add @apollo/client graphql

## Running Backend
- backend> yarn run dev
To use the CRUD functionality no middleware (e.g. Postman) is needed. Go to http://localhost:3001/graphql to test out all queries and mutations. All available commands can be found under frontend/src/Graphql

Example (This will create a Tracking):

mutation {
  createTask(name: "MyTask" description:"The description of the Task") {
    name
    description
  }
}

## Running Frontend
- frontend> yarn start

Click the Links at the top of the page to navigate the application. All inputs are done via input fields and buttons.

