var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema ({
  username: String,
  email: String
});


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/github-auth');

module.exports = mongoose.model("users", User);
