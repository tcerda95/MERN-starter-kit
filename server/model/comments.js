var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  author: { type: String, required: true },
  text: { type: String, required: true },
  twitter: String,
  imageURL: String
});

module.exports = mongoose.model('Comment', CommentsSchema);