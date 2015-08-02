 var app = angular.module("myApp",['ngRoute']);

 app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
      templateUrl: 'views/favorite.html',
      controller: 'FavoriteGames'
    })
    .when('/catalog',{
      templateUrl:'views/catalog.html',
      controller:'Catalog'
    })
    .otherwise({redirectTo:'/'});
  }]);