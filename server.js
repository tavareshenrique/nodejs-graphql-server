const express = require("express");
const expressGraphql = require("express-graphql");

const { buildSchema } = require("graphql");

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

// Root resolver
const rootValue = {
  message: () => "Hello World"
};

// Create an express server and a GraphQL endpoint
const app = express();
app.use(
  "/graphql",
  expressGraphql({
    schema,
    rootValue,
    graphiql: true
  })
);

app.listen(3333, () =>
  console.log("Express GraphQL Server Now Running On localhost:3333/graphql")
);
