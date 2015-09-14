angular.module('starter.controllers', [])

/*.controller('OrderCtrl', function($scope, $window, $state, $ionicViewSwitcher) {
  //delete $window.localStorage["adress"];
  $scope.data = { 'sport' : '1'};

                  //'flavour': 'Chose your flavour' };
  $scope.sport = {0: "Sedentary",
                  1: "\tModerate",
                  2: "\tActive"};

  //Recuperer ça depuis la bdd
  $scope.flavours = ['chocolate', 'vanilla', 'coco']

  $scope.save = function(){
    //Check all fields
    $window.localStorage['sport'] = $scope.data['sport'];
    $window.localStorage['flavour'] = $scope.data['flavour'];

    $state.go('tab.order-place');

    // move to the next page
  }


  $scope.reset = function(){
    delete $window.localStorage["adress"];
  }


  $scope.onSwipeLeft = function(){
      
  };

  $scope.onSwipeRight = function(){
      $state.go('tab.user');
      $ionicViewSwitcher.nextDirection("back");
  };

})*/


.controller('OrderConfirmCtrl', function($scope, $window) {
  $scope.sport = {0: "Sedentary",
                  1: "\tModerate",
                  2: "\tActive"};
/*
  var $adress = JSON.parse($window.localStorage['adress']);
  var $sport = $window.localStorage['sport'];
  var $flavour = $window.localStorage['flavour'];
  $scope.sport = $sport;
  $scope.cadress = $adress;
  $scope.flavour = $flavour;*/
  console.log()
})



.controller('DashCtrl', function($scope) {})

.controller('UserCtrl', function($scope, $location, $ionicPopup, $state, $ionicViewSwitcher) {
  $scope.data = {};

    $scope.Height_range = function(start, end) {
      var result = [];
      for (var i = start; i <= end; i++) {
          result.push(i + " cm");
      }
      return result;
  };

  $scope.Weight_range = function(start, end) {
      var result = [];
      for (var i = start; i <= end; i++) {
          result.push(i + " kg");
      }
      return result;
  };


  $scope.onSwipeLeft = function(){
      $state.go('tab.order');
      $ionicViewSwitcher.nextDirection("forward");
  };

  var showAlert = function(message) {
   var alertPopup = $ionicPopup.alert({
     title: 'Field missing !',
     type: 'button-balanced',
     template: 'You need to specify your ' + message,
     buttons:[{
      text: 'Ok',
      type: 'button-balanced',}]
   });
   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };

  $scope.save = function(){
      console.log($scope.data);
      var data = $scope.data;
      //TODO Save data in local storage.
      if (data['sex'] == undefined){
        //showAlert('sex.');
      }
      else if (data['name'] == undefined){
        showAlert('name.');
      }
      else if (data['birth'] == undefined){
        showAlert('birth.');
      }
      else if (data['height'] == undefined){
        showAlert('height.');
      }
      else if (data['weight'] == undefined){
        showAlert('weight. (We wont tell anyone)');
      }
      else if (data['phone'] == undefined){
        showAlert('phone.');
      }
      else {
        // SAVE THE INFORMATION HERE
        $state.go('tab.order');

      }
  };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('LoginCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

