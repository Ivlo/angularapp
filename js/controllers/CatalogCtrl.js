app.controller('CatalogCtrl', ['$scope','$rootScope','$location','MyDataFactory',function($scope,$rootScope,$location,MyDataFactory){
  $scope.catalog = "Controlador del catalogo";
 
  MyDataFactory.getDataFromServer().then(function(data){
    var allData= data.data.games;
    $scope.games= allData;

    MyDataFactory.setDataToLocalStorage('games',allData);
  })
  

  $scope.goToGame = function ($event,name) {
    $event.preventDefault();
    $location.path('catalog/' + name)
  };


}]);
