angular
  .module("themeParkApp")
  .controller("createAccountController", function ($scope, $http, $state, accountService) {

    $scope.users = [];

    $http.get("http://localhost:5000/api/user").then(function (response) {
      $scope.users = response.data;
    });

    $scope.addUser = function () {
      accountService.saveNewUser($scope.user);
      $http.post("http://localhost:5000/api/user", $scope.user).then(function () {
        $state.go("accountNew");
      });
    }
        
  });

