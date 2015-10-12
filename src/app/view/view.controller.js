(function() {
  'use strict';

  angular
    .module('johoApp')
    .controller('ViewController', ViewController);


  /** @ngInject */
  function ViewController() {
    var vm = this;

    vm.pageTitle = '';


    activate();

    function activate() {
      updateTitle();
    }


    function updateTitle() {
      vm.pageTitle = 'Jonathan Ho · Web Developer · New York NY';
    }
  }


})();
