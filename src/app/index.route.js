(function() {
  'use strict';

  angular
    .module('johoApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl   : 'app/main/main.html',
        controller    : 'MainController',
        controllerAs  : 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
