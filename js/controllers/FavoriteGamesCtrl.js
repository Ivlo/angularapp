app.controller('FavoriteGamesCtrl', ['$scope','$rootScope',function($scope,$rootScope){
  $scope.favorite = "Controlador de mis favoritos";

  if ($rootScope.data) {
    var data= $scope.data.data.games;
  }
}]);