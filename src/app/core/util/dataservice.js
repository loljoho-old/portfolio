(function() {
  'use strict';

  angular
    .module('johoApp')
    .factory('dataservice', dataserviceFactory);

  /** @ngInject */
  function dataserviceFactory($resource) {

    var url = 'assets/data/:resource.json';

    var paramDefaults = {
      resource  : '@resource'
    };

    var actions = {

    };

    return $resource(url, paramDefaults, actions);

  }

})();
