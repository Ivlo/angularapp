app.controller('CatalogCtrl', ['$scope','CatalogFactory',function($scope,CatalogFactory){
  $scope.catalog = "Controlador del catalogo";

  CatalogFactory.getGames()
  .then(function(elements) {
    $scope.games = elements.data.games
  })

  $scope.goToGame = function ($event,name) {
    
    $event.preventDefault();

    CatalogFactory.goToGame(name);
  };

  
}]);