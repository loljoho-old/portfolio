(function() {
  'use strict';

  describe('controllers', function() {

    beforeEach(module('johoApp'));

    it('should define a page title string', inject(function($controller) {

      var vm = $controller('ViewController');

      expect(angular.isString(vm.pageTitle)).toBeTruthy();


    }));

  });

})();
