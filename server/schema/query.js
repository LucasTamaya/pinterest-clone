const graphql = require("graphql");
const Post = require("../models/post");
const bcrypt = require("bcrypt");

const PostType = require("./TypesDef/PostType");

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
} = graphql;

// Définition des roots queries
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // Endpoint getMyPins
    myPosts: {
      type: new GraphQLList(PostType),
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, { id }) => {
        const posts = await Post.find({ authorId: id });

        if (!posts) {
          throw new Error("No posts yey");
        }

        if (posts) {
          return posts;
        }

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
            return user;
          }
        }
      },
    },
    // Endpoint getAllPins
    allPosts: {
      type: new GraphQLList(PostType),
      resolve() {
        return Post.find({});
      },
    },

    // Endpoint pour un single post
    singlePost: {
      type: PostType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, { id }) => {
        const post = await Post.findById(id);

        if (!post) {
          throw new Error("This post doesn't exists");
        }

        if (post) {
          return post;
        }
      },
    },
  },
});

module.exports = RootQuery;
