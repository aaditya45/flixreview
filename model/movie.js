var mongoose = require('mongoose');
mongoose.Promise=global.Promise;

const movieSchema = new mongoose.Schema({
  imdbId: String,
  title: String,
  releaseDate: String,
  trailerLink: String,
  poster: String,
  genres: [String],
  backdrops: [String],
  reviewIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }]
}, {
  timestamps: true,
  collection: 'movies'
});

module.exports = mongoose.model('movie', movieSchema);
