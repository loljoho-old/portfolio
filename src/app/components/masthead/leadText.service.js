(function() {
  'use strict';

  angular
    .module('johoApp.components')
    .service('leadTextService', leadTextService);

  /** @ngInject */
  function leadTextService() {

    this.getLeadText = getLeadText;

    var data = [];

    var prefix = ['Web', 'Web', 'Front-End', 'Front-End', 'Back-End', 'Full-Stack', 'AngularJS'];
    var suffix = ['Developer', 'Developer', 'Developer', 'Engineer', 'Engineer', 'Architect', 'Artisan'];

    for(var i = 0; i < prefix.length; i++) {
      for(var j = 0; j < suffix.length; j++) {
        data.push(prefix[i] + ' ' + suffix[j]);
      }
    }

    for(var i = data.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }

    function getLeadText() {
      return data;
    }

  }
})();
