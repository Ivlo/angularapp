app.controller('GameCtrl', ['$scope','$rootScope','$routeParams',function($scope,$rootScope,$routeParams){
  if ($rootScope.data) {
    var dataGames= $scope.data.data.games;
  }

  var routeGame= $routeParams.name;
     
  $scope.getGame = function() {
    for (var i in dataGames) {
      if (dataGames[i].short == routeGame) {
        return dataGames[i];
      }
    }
  }

  $scope.game= $scope.getGame();

  $scope.addTofavorite = function($event) {
    $event.preventDefault();
    $scope.game.hasBoosters= true;
  }

  $scope.removeTofavorite = function($event) {
    $event.preventDefault();
    $scope.game.hasBoosters= false;
  }

}]);
