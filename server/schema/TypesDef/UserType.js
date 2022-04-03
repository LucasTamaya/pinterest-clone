// const graphql = require("graphql");

// const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = graphql;
// // const PostType = require("../TypesDef/PostType");
// // const Post = require("../../models/post");

// // Définition du User Type
// const UserType = new GraphQLObjectType({
//   name: "User",
//   fields: () => ({
//     username: { type: GraphQLString },
//     email: { type: GraphQLString },
//     password: { type: GraphQLString },
//     _id: { type: GraphQLID },
//   }),
// });

// module.exports = UserType;

// /*
// savedPins: {
//       type: new GraphQLList(PostType),
//       resolve(parent, args) {
//         let savedPinsData = [];
//         parent.savedPins.map((x) => {
//           savedPinsData.push(Post.findById(x));
//         });
//         console.log(savedPinsData);
//       },
//     },
// */
