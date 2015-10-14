(function() {
  'use strict';

  angular
    .module('johoApp.core')
    .run(appRun);

  /* @ngInject */
  function appRun(routeHelper) {
    var otherwise = '/404';
    routeHelper.configureRoutes(getRoutes(), otherwise);
  }

  function getRoutes() {
    return [
      {
        url: '/',
        config: {
          templateUrl   : 'app/main/main.html',
          controller    : 'MainController',
          controllerAs  : 'main'
        }
      }
    ];
  }
})();