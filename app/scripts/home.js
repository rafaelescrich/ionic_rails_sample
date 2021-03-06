angular.module('sample.home', [])

.controller('HomeCtrl', function($scope, User, $http) {

  $scope.recurso = {};

  this.userService = new User(serverErrorHandler);
  this.userService.all().$promise.then(function(result) {
    return $scope.users = result.users;
  });

  var serverErrorHandler = function() {
    return console.log("There was a server error.");
  };

  $scope.like = function() {
    $http.post('http://portalmecapi.c3sl.ufpr.br/v1/learning_objects/3/like')
      .success(function (res) {
        console.log('like com sucesso');
      })
      .error(function (res) {
        console.log('não rolou like');
      });
  };

  $scope.refresh = function() {
    $http.get('http://portalmecapi.c3sl.ufpr.br/v1/learning_objects/3?obba=')
      .then(function(response) {
          $scope.recurso = response.data;
      });
  };
});
