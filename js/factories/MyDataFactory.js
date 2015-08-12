app.factory('MyDataFactory', ['$http','$window',function MyDataFactory ($http, $window) {

  return {
    getDataFromServer: function() {
      return $http.get('data/games.json')
    },
    getDataFromLocalStorage: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },
    setDataToLocalStorage: function(key,value) {
      $window.localStorage.setItem(key, JSON.stringify(value));
    }
  }
  
}]);
