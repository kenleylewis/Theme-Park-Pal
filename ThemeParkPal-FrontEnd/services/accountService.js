angular.module("themeParkApp")
  .service("accountService", function ($http) {
    var newUser = "";
    this.saveNewUser = function(user){
      newUser = user;
      console.log(newUser)
    }

    this.getUser = function(){
      return newUser;
    }

    this.updateUser = function(id, name, userName, park, gender, age, city, mobileNumber, email) {
      newUser.splice(id, 1, new newUser(id, name, userName, park, gender, age, city, mobileNumber, email))
    }
    console.log(newUser);

  });