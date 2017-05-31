var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = new Schema({
  imgUrl: { type: String, required: true },
  name: { type: String, required: true },
  bio: {type: String, required: true},
  careNotes: {type: String, required: true}
});

var Profile = mongoose.model('careprofiles', profileSchema);

module.exports = Profile;
