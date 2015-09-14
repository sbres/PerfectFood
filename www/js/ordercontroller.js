angular.module('starter.controllers')

.controller('OrderCtrl', function($scope, $window, $ionicModal, myCoolService, $ionicPopup, $state, $ionicViewSwitcher) {
  //Chopper les directions deja enregistre depuis le serveur
  console.log(myCoolService.directions);
  //Pour l'instant utiliser local storage
  
  $scope.data = {'order' : {'sport': 1,
                            //'flavour': '',
                            },
                  'cities': ['Shenzhen'],
                  'save': {},
                  'index_to_save' : -1,
                  'showDelete': false,
                  'showReorder': false,

                  'tmp' : {'sport': 1},
                };

  $scope.sport = {0: "Sedentary",
                  1: "\tModerate",
                  2: "\tActive"};

  $scope.flavours = ['chocolate', 'vanilla', 'coco']

  $scope.init = function(){
    $scope.data.directions = [];
    $scope.data.home = {};
    $scope.data.office = {};
    //$scope.adress = myCoolService.directions;
    //$scope.data.directions = myCoolService.directions;
  }
  var showAlert = function(message) {
     var alertPopup = $ionicPopup.alert({
       title: 'Field missing !',
       type: 'button-balanced',
       template: 'You need to specify ' + message,
       buttons:[{
        text: 'Ok',
        type: 'button-balanced',}]
     });
   };

  $ionicModal.fromTemplateUrl('templates/add-location.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  //////////////////////////////////////////

  $scope.next_1 = function(){
    //Check all fields
    $scope.data.tmp['sport'];
    if ($scope.data.tmp['flavour'] == undefined)
    {
        showAlert('a flavour.');
        return;
    }
    $state.go('tab.order-place');
    // move to the next page
  }
  
  $scope.onItemDelete = function(item) {
    //$scope.items.splice($scope.items.indexOf(item), 1);
    //$scope.adress.splice(item, 1);

    if (!Number.isInteger(item)){
        if (item.localeCompare('home') == 0 || item.localeCompare('office') == 0)
        {
            $scope.data[item] = {};
        }
      }
      else {
        $scope.data.directions.splice(item, 1);
      }
  };

  $scope.editaddress = function(item){
      console.log('Eddit bitch !');
      console.log(item);
      if (!Number.isInteger(item)){
        if (item.localeCompare('home') == 0 || item.localeCompare('office') == 0)
        {
            $scope.data.save = angular.copy($scope.data[item]);
        }
      }
      else {
        $scope.data.save = angular.copy($scope.data.directions[item]);
        $scope.data.index_to_save = item;
      }
      $scope.modal.show($scope.adress);

  };
  /////////////////////////////////////////

  $scope.select_address = function(item){
    var $tmp;

    if ($scope.data.showReorder == true){
      return;
    }
  };

  /////////////////////////////////////////////////////
  ///             POP up stuff                   //////
  ///                                           ///////
  /////////////////////////////////////////////////////
  $scope.pop_new = function(){
    $scope.modal.show($scope.adress);
  };

  $scope.static_address = function(kind){
    console.log('static_address');
    console.log($scope.data[kind]);
    if (angular.equals({}, $scope.data[kind]))
    {
      console.log('NEW');
      $scope.data.save['name'] = kind.charAt(0).toUpperCase() + kind.slice(1);;
      $scope.modal.show($scope.adress);
    }
    else
    {
      // Go to next HEHEHE
      console.log('SELECT');
    }
  };

  $scope.close_new = function() {
    $scope.modal.hide();
  };

  $scope.doSave = function(){
    var data = $scope.data.save;
    if (data['name'] == undefined){
      showAlert(' a name.');
      return;
    }
    else if (data['city'] == undefined){
      showAlert(' a city.');
      return;
    }
    else if (data['district'] == undefined){
      showAlert(' a district.');
      return;
    }
    else if (data['adress'] == undefined){
      showAlert(' a adress.');
      return;
    }
    else if (data['floor'] == undefined){
      showAlert(' a floor.');
      return;
    }
    else if (data['apartment'] == undefined){
      showAlert(' a apartment.');
      return;
    }
    console.log(data);    

    if (data['name'].localeCompare('Home') == 0 || data['name'].localeCompare('Office') == 0){
        console.log('home or office');
        if (data['name'].localeCompare('Home') == 0 )
        {
            $scope.data.home = data;
        }
        else if (data['name'].localeCompare('Office') == 0 )
        {
            $scope.data.office = data;
        }
    }
    else{
      if ($scope.data.index_to_save == -1)
      {
          console.log('normal save');
          console.log(data);
          $scope.data.directions.push(angular.copy(data));
          console.log($scope.data.directions);
      }
      else
      {
        console.log('index save');
        console.log($scope.data.index_to_save);
        
        $scope.data.directions[$scope.data.index_to_save] = angular.copy(data);
      }
    }

    $scope.modal.hide();
    $scope.data.save = {};
    $scope.data.index_to_save = -1;
  };


  $scope.onSwipeLeft = function(){
      //$state.go('tab.order');
      // Go to last page
      $ionicViewSwitcher.nextDirection("forward");
  };

  $scope.onSwipeRight = function(){
      $state.go('tab.user');
      // Go to last page
      $ionicViewSwitcher.nextDirection("back");
  };

});
