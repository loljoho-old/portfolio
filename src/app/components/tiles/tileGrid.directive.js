(function() {
  'use strict';

  angular
    .module('johoApp')
    .directive('johoTileGrid', johoTileGridDirective);

  /** @ngInject */
  function johoTileGridDirective() {
    var directive = {
      restrict      : 'EA',
      replace       : true,
      require       : 'johoTile',
      transclude    : true,
      scope: {

      },
      templateUrl: 'app/components/tiles/tileGrid.html'
    };

    return directive;

  }

})();
