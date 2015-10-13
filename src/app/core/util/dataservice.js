(function() {
  'use strict';

  angular
    .module('johoApp')
    .factory('dataservice', dataserviceFactory);

  /** @ngInject */
  function dataserviceFactory($resource) {

    var url = 'assets/data/skills.json';
    var resource = $resource(url);

    return resource;

  }

})();
