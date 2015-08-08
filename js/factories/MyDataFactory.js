app.factory('MyDataFactory', ['$http','$rootScope',function MyDataFactory ($http, $rootScope) {
  
  return $http.get('data/games.json')
    .then(function (data) {
      $rootScope.data= data;
    })
}]);
