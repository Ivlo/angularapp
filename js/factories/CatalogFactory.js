app.factory('CatalogFactory', ['$q','$http',function InboxFactory ($q,$http) {
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
    }
  }
}]);