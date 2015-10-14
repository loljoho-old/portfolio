(function() {
  'use strict';

  angular
    .module('johoApp')
    .controller('SkillsController', SkillsController);

  /** @ngInject */
  function SkillsController($log, dataservice) {
    var vm = this;

    vm.stackList = [];




    // ------------------------------
    //  Controller Startup Logic
    // ------------------------------

    activate();

    function activate() {
      getStackList();
    }




    // ------------------------------
    //  Controller Methods
    // ------------------------------

    function getStackList() {
      dataservice.get({resource:'skills'}).$promise
        .then(function(response) {
          vm.stackList = response.expertise;
          $log.info(vm.stackList.toString());
        }, function(errorMsg) {
          vm.stackList = errorMsg.toString();
        });
    }
  }
})();
