const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const UserType = require("./UserType");
const User = require("../../models/user");

// Définition du Post Type
const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    imgUrl: { type: GraphQLString },
    _id: { type: GraphQLID },
    author: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.authorId);
      },
    },
  }),
});

module.exports = PostType;
