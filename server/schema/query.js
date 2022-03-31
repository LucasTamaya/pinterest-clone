const graphql = require("graphql");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
} = graphql;

// Définition du User Type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    _id: { type: GraphQLID },
  }),
});

// Définition des roots queries
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // Endpoint login
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        // Si l'utilisateur n'existe pas, on renvoit un message d'erreur
        if (!user) {
          throw new Error("Email or password invalid");
        }

        if (user) {
          // On compare les mots de passe
          const matchPasswords = await bcrypt.compare(password, user.password);

          if (!matchPasswords) {
            throw new Error("Email or password invalid");
          }

          if (matchPasswords) {
            return user
          }
        }
      },
    },
  },
});

module.exports = RootQuery;
