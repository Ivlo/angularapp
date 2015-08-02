 var app = angular.module("myApp",['ngRoute']);

 app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
      templateUrl: 'views/favorite.html',
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
    .otherwise({redirectTo:'/'});
  }]);