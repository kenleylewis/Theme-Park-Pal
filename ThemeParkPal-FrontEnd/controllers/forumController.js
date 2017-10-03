angular
  .module("themeParkApp")
  .controller("forumController", function($scope, $state, $stateParams, forumService) {
 
  
  
    forumService.getPosts().then(function(response) {
      $scope.posts = response;
      $scope.post = forumService.getPostById($stateParams.id);
      console.log($scope.posts);
    })

 
 
  $scope.addLike = function(post) {
    if (post.likeCounter == true){
      post.likes++
      post.likeCounter = false;
     
    } else {
      post.likes--
      post.likeCounter = true;
    } 
  }

  $scope.addDislike = function(post) {
    if (post.dislikeCounter == true){
      post.dislikes++
      post.dislikeCounter = false;

    } else {
      post.dislikes--
      post.dislikeCounter = true;
    }
  }

  $scope.addTopic = function(){
    $state.go("forumTopic");
  }

  $scope.addPost = function() {
    var curPost = $scope.post;
    forumService.addPost(curPost.title, curPost.name, curPost.content, curPost.link)
    $state.go("forum")
  }

  $scope.updatePost = function(post) {
    forumService.updatePost(post.id, $scope.title, $scope.name, $scope.content, $scope.link)
    $state.go("forumTopic", { "id": $stateParams.id});
  }

  $scope.deletePost = function(post) {
    console.log("delete");
    forumService.deletePost(post.id)
  }
})