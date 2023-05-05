const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
  body: String
}, {
  timestamps: true,
  collection: 'reviews'
});

module.exports = mongoose.model('Review', reviewSchema);