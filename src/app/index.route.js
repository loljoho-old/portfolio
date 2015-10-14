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
        controllerAs  : 'main',
        resolve: {
          /** @ngInject */
          data: function($q, dataservice) {
            var response = dataservice.get({resource:'skills'});
          }
          return $q.all(dataservice.$promise);

        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
