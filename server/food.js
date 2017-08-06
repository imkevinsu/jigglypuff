var mongoose = require('mongoose');

module.exports = mongoose.model('Food', {
  name: String,
  calories: Number
});
