(function() {
  'use strict';

  angular
    .module('johoApp')
    .directive('johoNavbar', johoNavbar);

  /** @ngInject */
  function johoNavbar() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/navbar/navbar.html',
      // scope: {
      //   creationDate: '='
      // },
      controller: 'NavbarController',
      controllerAs: 'nav',
      bindToController: true
    };

    return directive;

    
  }
})();
