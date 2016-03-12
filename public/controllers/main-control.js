(function() {
  angular
    .module('eightBall')
    .controller('mainCtrl', mainCtrl)

  function mainCtrl ($scope, eightBallService) {
    $scope.submitQuestion = function () {
      eightBallService.getFortune()
        .then(function (fortune) {
          $scope.fortune = fortune;
          $scope.question = '';
        });
    }
  }
})()
