var app = angular.module("themeParkApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {
 
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })
    .state("accountNew", {
      url: '/users/new',
      templateUrl: "./views/account.html",
      controller: "accountController"
    })
    .state("account", {
      url: '/users/:id',
      templateUrl: "./views/account.html",
      controller: "accountController"
    })
      .state("createAccount", {
       url: "/createAccount",
       templateUrl: "./views/create-account.html",
       controller: "createAccountController"
     })
    .state("match", {
      url: "/match",
      templateUrl: "./views/match.html",
      controller: "matchController"
    })
    .state("forum", {
      url: "/forum",
      templateUrl: "./views/forum.html",
      controller: "forumController"
    })
      .state("forumTopic", {
        url: "/forum/topic/:id",
        templateUrl: "./views/forum-topic.html",
        controller: "forumController"
      })

})