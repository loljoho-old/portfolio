/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('johoApp')
    .constant('APP_ENV', 'production')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment);

})();
