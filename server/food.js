var mongoose = require('mongoose');

//This is my schema!!!
module.exports = mongoose.model('Food', {
  name: String,
  calories: Number
});
