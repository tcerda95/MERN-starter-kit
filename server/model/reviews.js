const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewsSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  score: { type: Number, required: true, min: 1, max: 10 },
  recommend: { type: Boolean, required: true },
  text: { type: String },
  date: { type: Date, default: Date.now }
});

reviewsSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

reviewsSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Review', reviewsSchema);
