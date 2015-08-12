app.controller('FavoriteGamesCtrl', ['$scope','MyDataFactory',function($scope, MyDataFactory){
  $scope.favorite = "Controlador de mis favoritos";
  
  if (localStorage.getItem("games") !=null) {
    $scope.favorites= MyDataFactory.getDataFromLocalStorage('games')
  }

}]);