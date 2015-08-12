app.controller('GameCtrl', ['$scope','$rootScope','$routeParams','MyDataFactory',function($scope,$rootScope,$routeParams,MyDataFactory){
  // if ($rootScope.data) {
  //   var dataGames= $scope.data.data.games;
  // }

  var dataGames=  MyDataFactory.getDataFromLocalStorage('games')

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
    MyDataFactory.setDataToLocalStorage('games',dataGames);
  }

  $scope.removeTofavorite = function($event) {
    $event.preventDefault();
    $scope.game.hasBoosters= false;
    MyDataFactory.setDataToLocalStorage('games',dataGames);
  }

}]);
