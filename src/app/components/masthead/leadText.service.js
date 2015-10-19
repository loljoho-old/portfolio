(function() {
  'use strict';

  angular
    .module('johoApp')
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

    for(var k = data.length - 1; k > 0; k--) {
      var l = Math.floor(Math.random() * (k + 1));
      var temp = data[k];
      data[k] = data[l];
      data[l] = temp;
    }

    function getLeadText() {
      return data;
    }

  }
})();
