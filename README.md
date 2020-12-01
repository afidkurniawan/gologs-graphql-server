# Go-Logs GraphQL
Go-Logs API gateway built using [React](https://reactjs.org) and [Apollo](https://www.apollographql.com/).

## Coding Rules 📖

The main idea is to compose and expose a single data graph from ALL backend services using Apollo Federation.

For every backend service, create its representation as a Node.js package under the directory `./src/services`.
All of its dependencies must be contained in root `node_modules`.

Follow [this tutorial](https://www.apollographql.com/docs/federation/) to learn more about Apollo Federation.
