(function() {
  'use strict';

  angular
    .module('johoApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($routeProvider, $locationProvider) {
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
      .when('/work', {
        templateUrl   : 'app/sections/work/work.html',
        controller    : 'WorkController',
        controllerAs  : 'work'
      })
      .when('/about', {
        templateUrl   : 'app/sections/about/about.html',
        controller    : 'AboutController',
        controllerAs  : 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

      // HTML5 History API
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }

})();
