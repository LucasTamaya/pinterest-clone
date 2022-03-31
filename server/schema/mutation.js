const graphql = require("graphql");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
} = graphql;

// Définition du User Type
const UserType = new GraphQLObjectType({
  name: "UserRegister",
  fields: () => ({
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    _id: { type: GraphQLID },
  }),
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Endpoint register
    register: {
      type: UserType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, { username, email, password }) => {
        const user = await User.findOne({ email });
        // Si l'utilisateur existe deja, on renvoit un message d'erreur
        if (user) {
          throw new Error("This user already exists, try to login");
        }

        // Sinon, on hash le password et on enregistre le nouvel utilisateur dans la base de donnée
        if (!user) {
          // Hash du password avec bcrypt
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
          let newUser = new User({
            username,
            email,
            password: hashPassword,
          });
          // On enregistre et on retourne le nouvel utilisateur
          return newUser.save();
        }
      },
    },
  },
});

module.exports = Mutation;
