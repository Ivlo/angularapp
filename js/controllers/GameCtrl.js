app.controller('GameCtrl', ['$scope','$rootScope','$routeParams','MyDataFactory',function($scope,$rootScope,$routeParams,MyDataFactory){
  
  if (localStorage.getItem("games") === null) {
    console.log('no hay local storage');
    MyDataFactory.getDataFromServer().then(function(data){
      var allData= data.data.games;

      $scope.games= allData;

      MyDataFactory.setDataToLocalStorage('games',allData);
    })
  }else {
    $scope.games= MyDataFactory.getDataFromLocalStorage('games')
    console.log('hay local storage');
  }

  var dataGames=  $scope.games,
      routeGame= $routeParams.name;
     
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
