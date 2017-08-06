app.controller('foodsController', ['$scope', '$resource', function ($scope, $resource) {
  var Food = $resource('/api/foods');

  Food.query(function (results) {
    $scope.foods = results;
  });

  $scope.createFood = function () {
    var food = new Food();
    food.name = $scope.foodName;
    food.calories = $scope.calNumber;

    food.$save(function (result) {
      $scope.foods.push(result);
      console.log($scope.calNumber);
      $scope.foods.push($scope.calNumber);
      $scope.totalcal = $scope.calNumber + $scope.totalcal;
      $scope.foodName = '';
      $scope.calNumber = '';
    });
  };
}]);
