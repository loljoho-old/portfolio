(function() {
  'use strict';

  angular
    .module('johoApp')
    .controller('SubnavController', SubnavController);


  /** @ngInject */
  function SubnavController($log) {
    var vm = this;

    activate();

    function activate() {
      getNavItems();
    }




    // Nav Items
    // ------------------------------

    function getNavItems() {
      vm.navItems = [{
        'text': 'Home',
        'link': '/'
      }, {
        'text': 'Work',
        'link': '/'
      }, {
        'text': 'Info',
        'link': '/'
      }];
    }


  }
})();
