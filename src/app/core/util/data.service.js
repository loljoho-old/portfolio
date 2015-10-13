(function() {
  'use strict';

  angular
    .module('johoApp')
    .factory('httpService', httpServiceFactory);

  /** @ngInject */
  function httpServiceFactory($location, $http, $log, $q) {


    var isPrimed = false;
    var primePromise;


    var service = {
      getSkills     : getSkills,
      getCategories : getCategories,
      ready: ready
    };

    return service;




    function getSkills() {
      return $http.get('assets/data/skills.json')
        .then(getSkillsComplete)
        .catch(function(errorMsg) {
          $log.warn('XHR Failed for getSkills ' + errorMsg);
          $location.url('/');
        });

      function getSkillsComplete(response) {
        return response.data;
      }
    }




    function getCategories() {
      return getCategoriesData()
        .then(getCategoriesDataComplete)
        .catch($log.warn('XHR Failed for getCategories'));

      function getCategoriesDataComplete(response) {
        return $q.when(response);
      }
    }




    function getCategoriesData() {
      var categories = [{
        "name": "general",
        "title": ""
      }, {
        "name": "expertise",
        "title": "Areas of Expertise"
      }, {
        "name": "skills",
        "title": "Skills & Proficiencies"
      }];
      return $q.when(categories);
    }




    function prime() {
      // This function can only be called once.
      if (primePromise) {
        return primePromise;
      }

      primePromise = $q.when(true).then(success);
      return primePromise;

      function success() {
        isPrimed = true;
        $log.info('Data Service is primed.');
      }
    }




    function ready(nextPromises) {
      var readyPromise = primePromise || prime();

      return readyPromise
        .then(function() {
          return $q.all(nextPromises);
        })
        .catch($log.warn('"ready" function failed'));
    }

  }

})();
