(function() {
  'use strict';

  // ------------------------------
  //  View Controller
  // ------------------------------
  //  Temporary solution - controller responsible for managing
  //  the content rendered in the browser view, including:
  //   - route resolve
  //   - page title
  //   - content section...
  // ------------------------------

  angular
    .module('johoApp')
    .controller('ViewController', ViewController);


  /** @ngInject */
  function ViewController($route, $routeParams, $location) {
    var vm = this;

    vm.pageTitle    = '';
    vm.cvDrives     = [];

    vm.$route       = $route;
    vm.$location    = $location;
    vm.$routeParams = $routeParams;


    activate();

    function activate() {
      updateTitle();
      getCvDrives();
    }


    function updateTitle() {
      vm.pageTitle = 'Jonathan Ho · Web Developer · New York NY';
    }


    // Drives for CV Download
    // ------------------------------

    function getCvDrives() {
      vm.cvDrives = [{
        'text': 'Google Drive',
        'link': '/'
      }, {
        'text': 'Dropbox',
        'link': '/'
      }, {
        'text': 'OneDrive',
        'link': '/'
      }];
    }


    // Drives for CV Download
    // ------------------------------

    function getPlaceholders() {
    }




  }


})();
