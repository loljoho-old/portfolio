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
        'text': 'Skills',
        'link': '/skills'
      }, {
        'text': 'Work',
        'link': '/work'
      }, {
        'text': 'About',
        'link': '/about'
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
