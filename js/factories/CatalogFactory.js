app.factory('CatalogFactory', ['$q','$http','$location',function InboxFactory ($q, $http, $location) {
  return {
    getGames: function() {
      var deferred = $q.defer();
      return $http.get('data/games.json')
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    },
    goToGame: function(name) {
      $location.path('catalog/' + name)
      
    }
  }
}]);