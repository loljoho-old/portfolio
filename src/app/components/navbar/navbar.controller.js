(function() {
  'use strict';

  angular
    .module('johoApp')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController() {
    var vm = this;

    vm.navItems = [];
    vm.isCollapsed = true;


    vm.toggleCollapse = toggleCollapse;

    // vm.relativeDate = moment(vm.creationDate).fromNow();

    activate();

    function activate() {
      getNavItems();
    }




    // ------------------------------
    //  Nav Items
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




    // ------------------------------
    //  Toggle Collapsed Menu
    // ------------------------------

    function toggleCollapse() {
      vm.isCollapsed = !vm.isCollapsed;
    }


  }
})();