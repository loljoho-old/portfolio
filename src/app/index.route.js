(function() {
  'use strict';

  angular
    .module('johoApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl   : 'app/sections/main/main.html',
        controller    : 'MainController',
        controllerAs  : 'main'
      })
      .when('/skills', {
        templateUrl   : 'app/sections/skills/skills.html',
        controller    : 'SkillsController',
        controllerAs  : 'main'
        //resolve: {
        //  /** @ngInject */
        //  data: function($q, $log, dataservice) {
        //    var response = dataservice.get({resource:'skills'});
        //    $log.info('Route /skills dataservice promise: ' + response.toString());
        //    return $q.all(response.$promise);
        //  }
        //}
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
