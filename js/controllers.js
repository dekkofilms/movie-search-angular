app.controller('movieSearch', ['$scope', '$http', function ($scope, $http) {
  $scope.view = {};

  $scope.runSearch = function (input) {
    console.log(input);
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + input
    }).then(function successCallback(response) {
        console.log(response.data.Search);
        $scope.view.movies = response.data.Search;
      }, function errorCallback(response) {
        $scope.view.movies = 'You Failed At Life';
      });
  }
}]);

app.controller('movie', ['$scope', '$http', '$routeParams',  function ($scope, $http, $routeParams) {
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

}]);
