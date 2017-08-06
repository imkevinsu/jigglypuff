var Food = require('./food');
//defined meetup model

module.exports.create = function (req, res) {
  var food = new Food(req.body);
  food.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Food.find({}, function (err, results) {
    res.json(results);
  });
}
