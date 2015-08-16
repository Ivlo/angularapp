app.controller('GameCtrl', ['$scope','$rootScope','$routeParams','MyDataFactory',function($scope,$rootScope,$routeParams,MyDataFactory){
  
  if (localStorage.getItem("games") === null) {
    console.log('no hay local storage');
    MyDataFactory.getDataFromServer().then(function(data){
      var allData= data.data.games;

      $scope.games= allData;

      MyDataFactory.setDataToLocalStorage('games',allData);
    })
  }else {
    $scope.games= MyDataFactory.getDataFromLocalStorage('games')
    console.log('hay local storage');
  }

  var dataGames=  $scope.games,
      routeGame= $routeParams.name;
     
  $scope.getGame = function() {
    for (var i in dataGames) {
      if (dataGames[i].short == routeGame) {
        return dataGames[i];
      }
    }
  }

  $scope.game= $scope.getGame();

  $scope.addTofavorite = function($event) {
    $event.preventDefault();
    $scope.game.hasBoosters= true;

    MyDataFactory.setDataToLocalStorage('games',dataGames);

    $scope.showMessage($event)
  }

  $scope.removeTofavorite = function($event) {
    $event.preventDefault();
    $scope.game.hasBoosters= false;

    MyDataFactory.setDataToLocalStorage('games',dataGames);

    $scope.showMessage($event)
  }

  $scope.showMessage= function(event) {
    var elementMessage= document.querySelectorAll(".m_message");
    $scope.message= event.target.getAttribute('data-message');

    elementMessage[0].classList.add("ivan");

    elementMessage[0].classList.add("hide-add-start");
    setTimeout(function() {
         elementMessage[0].classList.add("hide");
         elementMessage[0].classList.remove("hide-add-start");
    }, 3000);

     elementMessage[0].classList.add("hide-remove");
     elementMessage[0].classList.remove("hide");
    elementMessage[0].offsetHeight;
    elementMessage[0].classList.add("hide-remove-active");
    setTimeout(function(){
      elementMessage[0].classList.remove("hide-remove");
      elementMessage[0].classList.remove("hide-remove-active");
    }, 3000);  
  }
}]);
