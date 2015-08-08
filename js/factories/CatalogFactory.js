app.factory('CatalogFactory', ['$http','$rootScope', '$location',function InboxFactory ($http, $rootScope,$location) {
  
    return $http.get('data/games.json')
      .then(function (data) {
        $rootScope.data= data;
      })

 
  
 
    
      
      /*var deferred = $q.defer();*/
      


    
 
}]);
