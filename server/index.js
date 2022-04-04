const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

const schema = require("./schema/schema");

const app = express();

// Middleware CORS afin d'autoriser la connexion au serveur aux autres appareils
app.use(cors());

mongoose.connect(process.env.MONGODB_URI + "&w=majority");

mongoose.connection.once("open", () => console.log("MONGODB connected"));

app.get("/", (req, res) => {
  return res.json({ message: "Server is running" });
});

// Création du serveur graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Démarrage du serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
