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
          throw new Error("No posts yet");
        }

        if (posts) {
          return posts;
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
