var app = angular.module('moviesearchapp', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'partials/search.html',
    controller: 'movieSearch',
  })
  .when('/:movieID', {
    templateUrl: 'partials/movie.html',
    controller: 'movie',
  })
});
