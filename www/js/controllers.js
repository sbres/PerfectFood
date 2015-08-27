angular.module('starter.controllers', [])

.controller('OrderCtrl', function($scope) {
  $scope.data = { 'sport' : '0'};

                  //'flavour': 'Chose your flavour' };
  $scope.sport = {0: "Sedentary",
                  1: "\tModerate",
                  2: "\tActive"};
  $scope.flavours = ['chocolate', 'vanilla', 'coco']
  $scope.settingsList = [
    { text: "Wireless", checked: true },
    { text: "GPS", checked: false },
    { text: "Bluetooth", checked: false }
  ];
})

.controller('DeliveryCtrl', function($scope, $window, myCoolService) {
  //Chopper les directions deja enregistre depuis le serveur
  console.log(myCoolService.directions);
  //Pour l'instant utiliser local storage
  
  $scope.adress = myCoolService.directions;
  

})

.controller('DashCtrl', function($scope) {})

.controller('UserCtrl', function($scope, $location) {
  $scope.onSwipeRight = function(){
    console.log("test");
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
});
