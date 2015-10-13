(function() {
  'use strict';

  angular
    .module('johoApp')
    .directive('johoSubnav', johoSubnav);

  /** @ngInject */
  function johoSubnav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/subnav/subnav.html',
      controller: 'SubnavController',
      controllerAs: 'subnav'
    };

    return directive;

  }
})();
