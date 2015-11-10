(function() {
  'use strict';

  angular
    .module('johoApp')
    .directive('johoMasthead', johoMastheadDirective);

  /** @ngInject */
  function johoMastheadDirective() {
    var directive = {
      restrict: 'EA',
      replace: true,
      transclude: true,
      templateUrl: 'app/components/masthead/masthead.html',
      controller: MastheadController,
      controllerAs: 'ctrl'
    };

    return directive;

    /** @ngInject */
    function MastheadController($log) {

      activate();

      function activate() {
        $log.info('MastheadController activated');
      }

    }

  }

})();
