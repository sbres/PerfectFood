angular.module('starter.services', [])
.service('myCoolService', function ($window) {
  $tmp = $window.localStorage.getItem("adress");
  if ($tmp == undefined)
  {
    console.log("Nothing here");
    $window.localStorage["adress"] = JSON.stringify([]);
    this.directions = [];
  }
  else
  {
    console.log("Wow so much homes");
    this.directions = JSON.parse($tmp);
  }
});
