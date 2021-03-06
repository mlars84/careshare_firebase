var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: { type: String, required: true, unique: true }
});

var User = mongoose.model('users', userSchema);

module.exports = User;
