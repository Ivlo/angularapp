app.controller('CatalogCtrl', ['$scope', '$location', 'MyDataFactory',function($scope, $location, MyDataFactory){

  if (localStorage.getItem("games") === null) {
    MyDataFactory.getDataFromServer().then(function(data){
      var allData= data.data.games;

      $scope.games= allData;

      MyDataFactory.setDataToLocalStorage('games',allData);
    })
  }else {
    $scope.games= MyDataFactory.getDataFromLocalStorage('games');
  }

  $scope.goToGame = function ($event,name) {
    $event.preventDefault();
    $location.path('catalog/' + name)
  };

}]);
