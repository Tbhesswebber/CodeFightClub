const mongoose = require('mongoose');
const helpers = require('../helpers/databaseHelpers.js');


mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Connected to db...');
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  wins: Number,
  losses: Number,
  score: Number
});

// const ToyProblemSchema = new mongoose.Schema({
//   title: String,
//   prompt: String,
//   functionName: String,
//   tests: [TestSchema]
// });

// * Create helper functions in 'helpers' import file and assign to methods

// const TestSchema = new mongoose.Schema({
//   // Todo: Needs to be updated when we know test format
// })

// const ToyProblem = mongoose.Model('ToyProblem', ToyProblemSchema);

const User = mongoose.model('User', UserSchema);

//User collection functions
const getUserById = function(id, callback) {
  return User.findById(id, callback);
};


// Database export
module.exports.db = db;

//User collection export
module.exports.User = User;

//User functions
module.exports.getUserById = getUserById;
