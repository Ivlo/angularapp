app.controller('CatalogCtrl', ['$scope','$rootScope','$location','MyDataFactory',function($scope,$rootScope,$location,MyDataFactory){
  $scope.catalog = "Controlador del catalogo";
  
  $rootScope.$watch('data',function(){
    if ($rootScope.data) {
      $scope.games = $rootScope.data.data.games
    }
  })

  $scope.goToGame = function ($event,name) {
    $event.preventDefault();
    $location.path('catalog/' + name)
  };


}]);
