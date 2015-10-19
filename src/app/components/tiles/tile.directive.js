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
      require       : '^johoTileGrid',
      transclude    : false,
      scope: {
        tileTitle   : '@',
        tileText    : '@',
        tileLink    : '@'
      },
      templateUrl: 'app/components/tiles/tile.html',
      controller: TileController,
      controllerAs: 'tile'
    };

    return directive;

    function TileController() {
      //var vm = this;

      //vm.title    = vm.tileTitle;
      //vm.text     = vm.tileText;
      //vm.link     = vm.tileLink;
    }

  }

})();
