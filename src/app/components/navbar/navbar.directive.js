(function() {
  'use strict';

  angular
    .module('johoApp')
    .directive('johoNavbar', johoNavbar);

  /** @ngInject */
  function johoNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      // scope: {
      //   creationDate: '='
      // },
      controller: NavbarController,
      controllerAs: 'navbar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;

      vm.navItems = [];

      // vm.relativeDate = moment(vm.creationDate).fromNow();

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
  }
})();
