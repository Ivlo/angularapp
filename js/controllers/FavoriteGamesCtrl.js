app.controller('FavoriteGamesCtrl', ['$scope','$rootScope','MyDataFactory',function($scope,$rootScope,MyDataFactory){
  $scope.favorite = "Controlador de mis favoritos";

  // if ($rootScope.data) {
  //   $scope.favorites= $scope.data.data.games;
  // }

  var data= MyDataFactory.getDataFromLocalStorage('games')

  $scope.favorites= MyDataFactory.getDataFromLocalStorage('games')

}]);