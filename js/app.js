 var app = angular.module("myApp",['ngRoute','angularUtils.directives.dirPagination']);

 app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/favorites',{
      templateUrl: 'views/favorites.html',
      controller: 'FavoriteGamesCtrl'
    })
    .when('/catalog',{
      templateUrl:'views/catalog.html',
      controller:'CatalogCtrl'
    })
    .when('/catalog/:name',{
      templateUrl:'views/game.html',
      controller:'GameCtrl'
    })
    .otherwise({redirectTo:'/favorites'});
  }]);