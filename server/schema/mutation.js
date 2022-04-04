const graphql = require("graphql");
const bcrypt = require("bcrypt");

const User = require("../models/user");
// const UserType = require("./TypesDef/UserType");
const Post = require("../models/post");
// const PostType = require("./TypesDef/PostType");
const { PostType, UserType } = require("./typesDef");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
} = graphql;

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Endpoint pour le register
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
          const newUser = new User({
            username,
            email,
            password: hashPassword,
            savedPinsId: [],
          });
          // On enregistre et on retourne le nouvel utilisateur
          return newUser.save();
        }
      },
    },

    // Endpoint pour le login
    login: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
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
            return user;
          }
        }
      },
    },
    // Endpoint pour créer un post
    createPost: {
      type: PostType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        imgUrl: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, { title, description, imgUrl, authorId }) {
        const newPost = new Post({
          title,
          description,
          imgUrl,
          authorId,
        });
        return newPost.save();
      },
    },

    // Endpoint pour enregistrer un post
    savePost: {
      type: UserType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLString) },
        postId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, { userId, postId }) => {
        const user = await User.findById(userId);
        // Si le post a déjà été sauvegardé, on retourne une erreur
        if (user.savedPinsId.includes(postId)) {
          console.log("this post has already been saved");
          throw new Error("Pin already saved");
        }
        // Sinon on ajoute l'id du poste dans le tableau des posts enregistrés de l'utilisateur en question
        return User.findByIdAndUpdate(userId, {
          $push: { savedPinsId: postId },
        });
      },
    },
  },
});

module.exports = Mutation;
