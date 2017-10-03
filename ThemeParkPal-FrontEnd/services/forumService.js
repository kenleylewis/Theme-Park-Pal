angular
  .module("themeParkApp")
  .service("forumService", function($http, $q) {

    var _posts = []
    var _postId = 4
    

    function Post(id, title, name, content, link, likes, dislikes) {
      this.id = id;
      this.title = title;
      this.name = name;
      this.content = content;
      this.link = link;
      this.likes = likes;
      this.dislikes = dislikes;
      this.likeCounter = true;
      this.dislikeCounter = true;
      this.showButton = true;
      this.updateButton = true;
    }

    this.getPosts = function() {
      var deferred = $q.defer();
      if(_posts.length == 0) {
        $http.get("../db/forum.json")
          .then(function(response) {
            _posts = response.data
            deferred.resolve(_posts);
          },
          function(error) {
            console.log(error);
            deferred.reject(error);
          })
      }
      else {
        deferred.resolve(_posts);
      }
      return deferred.promise;
    }
    
    this.getPostById = function(id) {
      if (!id) {
        var post = {
            id: "",
            title: "",
            content: "",
            link: "",
            name: "",
            likes: "",
            dislikes: ""
          
        }
        return post
      }
      else {
        for (var i = 0; i < _posts.length; i++) {
          if (_posts[i].id == id) {
            return _posts[i]
          }
        }
      }
    }

    this.addPost = function(title, name, content, link) {
      _posts.unshift(new Post(_posts.length, title, name, content, link, 0, 0))
      console.log(_posts);
      
    }
    
    this.updatePost = function(postId, title, name, content, link) {
      _posts.splice(postId, 1, new Post(postId, title, name, content, link))
      

    }

    this.deletePost = function(postId) {
      for (var i = 0; i < _posts.length; i++) {
        if(_posts[i].id == postId) {
          _posts.splice(i,1)
        }
      }
    }
        

});