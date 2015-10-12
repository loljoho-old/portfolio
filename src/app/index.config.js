(function() {
  'use strict';

  angular
    .module('johoApp')
    .value('config', config)
    .config(configure);


  /** @ngInject */
  function configure($logProvider, $routeProvider, routehelperConfigProvider, toastr) {

    // Enable log
    $logProvider.debugEnabled(true);


    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;


    // Configure the common route provider
    routehelperConfigProvider.config.$routeProvider = $routeProvider;
    routehelperConfigProvider.config.docTitle = 'Jonathan Ho';


    var resolveAlways = { /* @ngInject */
      ready: function(dataservice) {
        return dataservice.ready();
      }
      // ready: ['dataservice', function (dataservice) {
      //   return dataservice.ready();
      // }]
    };


    routehelperConfigProvider.config.resolveAlways = resolveAlways;

  }


})();
