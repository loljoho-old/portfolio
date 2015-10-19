(function() {
  'use strict';

  angular
    .module('johoApp')
    .controller('WorkController', WorkController);

  /** @ngInject */
  function WorkController($log, dataservice) {
    var vm = this;

    vm.sectionData = {};

    vm.getSection = getSection;




    // ------------------------------
    //  Controller Startup Logic
    // ------------------------------

    activate();

    function activate() {
      getSection();
      $log.info('WorkController activated');
    }




    // ------------------------------
    //  Controller Methods
    // ------------------------------

    function getSection() {
      dataservice.get({resource:'section'}).$promise
        .then(function(response) {
          vm.sectionData = response;
          $log.info('getSection XHR response: ' + response.toString());
        }, function(errorMsg) {
          vm.sectionData = errorMsg.toString();
        });
    }
  }
})();
