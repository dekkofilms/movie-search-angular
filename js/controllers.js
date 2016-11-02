app.controller('movieSearch', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
  $scope.runSearch = function (input) {
    console.log(input);
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + input
    }).then(function successCallback(response) {
        console.log(response.data.Search);
        $rootScope.movies = response.data.Search;
      }, function errorCallback(response) {
        $rootScope.movies = 'You Failed At Life';
      });
  }
}]);

app.controller('movie', ['$scope', '$http', '$routeParams', '$location', '$rootScope',  function ($scope, $http, $routeParams, $location, $rootScope) {
  console.log($routeParams.movieID);
  let movieID = $routeParams.movieID
  $scope.view = {};

  $http({
    method: 'GET',
    url: 'http://www.omdbapi.com/?i=' + movieID
  }).then(function successCallback(response) {
      console.log(response);
      $scope.view.movie = response.data;
    }, function errorCallback(response) {
      $scope.view.movie = 'You Failed At Life';
    });

  $scope.runSearch = function (input) {
    console.log(input);
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + input
    }).then(function successCallback(response) {
        console.log(response.data.Search);
        $location.path('/');
        $rootScope.movies = response.data.Search;
      }, function errorCallback(response) {
        $rootScope.movies = 'You Failed At Life';
      });
  }

}]);
