const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, { id }, context) => {
            const foundUser = await User.findOne({
                $or: [{ _id: context.user ? context.user._id : id }, { username: context.user.username }],
              });
          
              if (!foundUser) {
                throw new AuthenticationError('You need to be logged in!');
              }

              return foundUser;
          },
    },

    Mutations: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },
        saveBook: async (parent, {SavedBookContent}, context) => {    
              if(context.user){
                  return await User.findOneAndUpdate(
                      {id: context.user._id},
                      {$addToSet: {savedBooks: SavedBookContent} },
                      { new: true, runValidators: true });

              }
              throw new AuthenticationError('You need to be logged in!');
          },
        removeBook: async (parent, {bookId}, context) => { 
              if(context.user){
                return await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: bookId } } },
                    { new: true }
                  );
              }
              throw new AuthenticationError('You need to be logged in!');
            

          }


    }
}

module.exports = resolvers;