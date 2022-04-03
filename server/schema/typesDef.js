const graphql = require("graphql");

const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = graphql;

const Post = require("../models/post");
const User = require("../models/user");

// Définition du User Type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    _id: { type: GraphQLID },
    savedPins: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        let result = [];
        parent.savedPinsId.map((x) => result.push(Post.findById(x)));
        console.log(result);
        return result;
      },
    },
  }),
});

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

module.exports = { UserType, PostType };

/*
savedPins: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        let savedPinsData = [];
        parent.savedPins.map((x) => {
          savedPinsData.push(Post.findById(x));
        });
        console.log(savedPinsData);
      },
    },
*/
