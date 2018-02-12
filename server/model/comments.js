const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentsSchema = new Schema({
  author: { type: String, required: true },
  text: { type: String, required: true },
  twitter: String,
  imageURL: String
});

module.exports = mongoose.model('Comment', CommentsSchema);
