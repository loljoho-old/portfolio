(function() {
  'use strict';

  angular
    .module('johoApp')
    .directive('johoTile', johoTileDirective);

  /** @ngInject */
  function johoTileDirective() {
    var directive = {
      restrict      : 'EA',
      replace       : true,
      transclude    : true,
      template      : getTemplate
      scope: {
        title     : '@',
        subtitle  : '@',
      },
      templateUrl: 'app/components/tile/tile.html',
      controller: TileController,
      controllerAs: 'card',
      bindToController: true
    };

    return directive;

    function TileController($scope) {
      var vm = this;
    }

  }

})();
