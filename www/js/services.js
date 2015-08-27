angular.module('starter.services', [])
.service('myCoolService', function ($window) {
  $tmp = $window.localStorage.getItem("firstname");
  if ($tmp == undefined)
  {
    console.log("Nothing here");
    $window.localStorage["firstname"] = [];
    this.directions = [];
  }
  else
  {
    console.log("Wow so much homes");
    this.directions = $tmp;
  }
});
