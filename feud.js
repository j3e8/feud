angular.module('app', []);

angular.module('app').controller('mainController', function($scope) {
  $scope.strikes = 0;

  $scope.reset = function() {
    $scope.answers = [];
    $scope.strikes = 0;
  }
  $scope.reset();

  $scope.getStrikesArray = function() {
    return new Array($scope.strikes);
  }

  $scope.toggleAnswer = function(answer) {
    answer.displayed = answer.displayed ? false : true;
  }

  $scope.addAnswer = function() {
    $scope.answers.push({
      value: null,
      points: null,
      displayed: true
    })
  }

  $scope.addStrike = function() {
    $scope.strikes++;
  }

});
