angular
  .module("themeParkApp")
  .controller("accountController", function ($scope, $http, accountService){
    $scope.users = [];
    $scope.newUser = accountService.getUser();
    $http.get("http://localhost:5000/api/user").then(function (response) {
      $scope.users = response.data;

    });

  });