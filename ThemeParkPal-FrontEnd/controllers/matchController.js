angular
  .module("themeParkApp")
  .controller("matchController", function ($scope, $http) {

    $scope.searchFor = '';
    $scope.matches = [];
    $scope.userAgePreference = '';
    $scope.userGenderPreference = '';
    $scope.userParkPreference = '';

    $http.get("http://localhost:5000/api/user").then(function (response) {
      $scope.users = response.data;
    });

    $scope.matchMe = function () {
      $scope.matches = [];
      console.log($scope.userAgePreference, $scope.userGenderPreference)
      for (var i = 0; i < $scope.users.length; i++) {
        if (($scope.userAgePreference == 1 && $scope.users[i].age >= 18 && $scope.users[i].age <= 25) && ($scope.userGenderPreference == 2 && $scope.users[i].gender == "Female") && ($scope.userParkPreference == 1 && $scope.users[i].park == "Disneyland")) {
          $scope.matches.push($scope.users[i]);
        }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 2 && $scope.users[i].age >= 26 && $scope.users[i].age <= 33) && ($scope.userGenderPreference == 2 && $scope.users[i].gender == "Female")  && ($scope.userParkPreference == 1 && $scope.users[i].park == "Disneyland")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 3 && $scope.users[i].age >= 34 && $scope.users[i].age <= 41) && ($scope.userGenderPreference == 2 && $scope.users[i].gender == "Female")  && ($scope.userParkPreference == 1 && $scope.users[i].park == "Disneyland")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 4 && $scope.users[i].age >= 42 && $scope.users[i].age <= 50) && ($scope.userGenderPreference == 2 && $scope.users[i].gender == "Female")  && ($scope.userParkPreference == 1 && $scope.users[i].park == "Disneyland")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 5 && $scope.users[i].age >= 51 && $scope.users[i].age <= 64) && ($scope.userGenderPreference == 2 && $scope.users[i].gender == "Female")  && ($scope.userParkPreference == 1 && $scope.users[i].park == "Disneyland")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 6 && $scope.users[i].age >= 65) && ($scope.userGenderPreference == 2 && $scope.users[i].gender == "Female")  && ($scope.userParkPreference == 1 && $scope.users[i].park == "Disneyland")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
      if (($scope.userAgePreference == 1 && $scope.users[i].age >= 18 && $scope.users[i].age <= 25) && ($scope.userGenderPreference == 1 && $scope.users[i].gender == "Male")  && ($scope.userParkPreference == 1 && $scope.users[i].park == "Disneyland")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 2 && $scope.users[i].age >= 26 && $scope.users[i].age <= 33) && ($scope.userGenderPreference == 1 && $scope.users[i].gender == "Male")  && ($scope.userParkPreference == 1 && $scope.users[i].park == "Disneyland")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 3 && $scope.users[i].age >= 34 && $scope.users[i].age <= 41) && ($scope.userGenderPreference == 1 && $scope.users[i].gender == "Male")  && ($scope.userParkPreference == 1 && $scope.users[i].park == "Disneyland")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 4 && $scope.users[i].age >= 42 && $scope.users[i].age <= 50) && ($scope.userGenderPreference == 1 && $scope.users[i].gender == "Male")  && ($scope.userParkPreference == 1 && $scope.users[i].park == "Disneyland")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 5 && $scope.users[i].age >= 51 && $scope.users[i].age <= 64) && ($scope.userGenderPreference == 1 && $scope.users[i].gender == "Male")  && ($scope.userParkPreference == 1 && $scope.users[i].park == "Disneyland")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 6 && $scope.users[i].age >= 65) && ($scope.userGenderPreference == 1 && $scope.users[i].gender == "Male")  && ($scope.userParkPreference == 1 && $scope.users[i].park == "Disneyland")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)

      ///universal selection
      {
        if (($scope.userAgePreference == 1 && $scope.users[i].age >= 18 && $scope.users[i].age <= 25) && ($scope.userGenderPreference == 2 && $scope.users[i].gender == "Female") && ($scope.userParkPreference == 2 && $scope.users[i].park == "Universal")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 2 && $scope.users[i].age >= 26 && $scope.users[i].age <= 33) && ($scope.userGenderPreference == 2 && $scope.users[i].gender == "Female")  && ($scope.userParkPreference == 2 && $scope.users[i].park == "Universal")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 3 && $scope.users[i].age >= 34 && $scope.users[i].age <= 41) && ($scope.userGenderPreference == 2 && $scope.users[i].gender == "Female")  && ($scope.userParkPreference == 2 && $scope.users[i].park == "Universal")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 4 && $scope.users[i].age >= 42 && $scope.users[i].age <= 50) && ($scope.userGenderPreference == 2 && $scope.users[i].gender == "Female")  && ($scope.userParkPreference == 2 && $scope.users[i].park == "Universal")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 5 && $scope.users[i].age >= 51 && $scope.users[i].age <= 64) && ($scope.userGenderPreference == 2 && $scope.users[i].gender == "Female")  && ($scope.userParkPreference == 2 && $scope.users[i].park == "Universal")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 6 && $scope.users[i].age >= 65) && ($scope.userGenderPreference == 2 && $scope.users[i].gender == "Female")  && ($scope.userParkPreference == 2 && $scope.users[i].park == "Universal")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
      if (($scope.userAgePreference == 1 && $scope.users[i].age >= 18 && $scope.users[i].age <= 25) && ($scope.userGenderPreference == 1 && $scope.users[i].gender == "Male")  && ($scope.userParkPreference == 2 && $scope.users[i].park == "Universal")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 2 && $scope.users[i].age >= 26 && $scope.users[i].age <= 33) && ($scope.userGenderPreference == 1 && $scope.users[i].gender == "Male")  && ($scope.userParkPreference == 2 && $scope.users[i].park == "Universal")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 3 && $scope.users[i].age >= 34 && $scope.users[i].age <= 41) && ($scope.userGenderPreference == 1 && $scope.users[i].gender == "Male")  && ($scope.userParkPreference == 2 && $scope.users[i].park == "Universal")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 4 && $scope.users[i].age >= 42 && $scope.users[i].age <= 50) && ($scope.userGenderPreference == 1 && $scope.users[i].gender == "Male")  && ($scope.userParkPreference == 2 && $scope.users[i].park == "Universal")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 5 && $scope.users[i].age >= 51 && $scope.users[i].age <= 64) && ($scope.userGenderPreference == 1 && $scope.users[i].gender == "Male")  && ($scope.userParkPreference == 2 && $scope.users[i].park == "Universal")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)
      {
        if (($scope.userAgePreference == 6 && $scope.users[i].age >= 65) && ($scope.userGenderPreference == 1 && $scope.users[i].gender == "Male")  && ($scope.userParkPreference == 2 && $scope.users[i].park == "Universal")) {
          $scope.matches.push($scope.users[i]);
        }
      }
      console.log($scope.matches)

    }
    }

  
    });

    //ng-repeat="match in matches" {{user.name}} or {{match.name}}
