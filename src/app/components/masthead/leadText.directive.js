(function() {
  'use strict';

  angular
    .module('johoApp.components')
    .directive('johoLeadText', johoLeadTextDirective);

  /** @ngInject */
  function johoLeadTextDirective(malarkey) {
    var directive = {
      restrict: 'EAC',
      scope: {
        initialText: '=',
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: LeadTextController,
      controllerAs: 'vm'
    };

    return directive;


    //  Link Function
    // ------------------------------

    function linkFunc(scope, element, attr, vm) {
      var watcher;

      var typist = malarkey(element[0], {
        typeSpeed: 80,
        deleteSpeed: 60,
        pauseDelay: 5000,
        loop: true,
        postfix: ' '
      });

      typist.type(scope.initialText).pause(5000).delete();

      watcher = scope.$watch('vm.leadTexts', function() {
        angular.forEach(vm.leadTexts, function(leadText) {
          typist.type(leadText).pause().delete();
        });
      });
            
      scope.$on('$destroy', function () {
        watcher();
      });
    }

    // ------------------------------




    // ------------------------------
    //  Controller
    // ------------------------------

    /** @ngInject */
    function LeadTextController($log, leadTextService) {
      var vm = this;

      vm.leadTexts = [];

      activate();

      function activate() {
        getTitles();
      }

      function getTitles() {
        vm.leadTexts = leadTextService.getLeadText();
      }
    }
    
    // ------------------------------

  }

})();
