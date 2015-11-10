(function() {
  'use strict';

  angular
    .module('johoApp')
    .controller('ViewController', ViewController);


  /** @ngInject */
  function ViewController() {
    var vm = this;

    vm.pageTitle  = '';
    vm.cvDrives   = [];


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
        'link': '/',
        'icon': 'assets/icons/drive__googledrive.svg'
      }, {
        'text': 'Dropbox',
        'link': '/',
        'icon': 'assets/icons/drive__dropbox.svg'
      }, {
        'text': 'OneDrive',
        'link': '/',
        'icon': 'assets/icons/drive__onedrive.svg'
      }];
    }


    // Drives for CV Download
    // ------------------------------

    




  }


})();