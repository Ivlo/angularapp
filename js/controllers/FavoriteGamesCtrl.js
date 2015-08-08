app.controller('FavoriteGamesCtrl', ['$scope','$rootScope',function($scope,$rootScope){
  $scope.favorite = "Controlador de mis favoritos";

  if ($rootScope.data) {
    $scope.favorites= $scope.data.data.games;
  }
}]);