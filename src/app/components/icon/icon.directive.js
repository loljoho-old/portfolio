(function() {
  'use strict';

  angular
    .module('johoApp')
    .directive('johoIcon', johoIconDirective);

  /** @ngInject */
  function johoIconDirective() {
    var directive = {
      replace: true,
      restrict: 'E',
      templateNamespace: 'svg',
      //templateUrl: getTemplate,
      scope: {
        svgSrc  : '='
      }//,
      //link: postLink
    };

    //function postLink(scope, element, attr) {

    //}

    //function getTemplate(tElement, tAttrs) {

    //}

    return directive;
  }

  // ['beaker.svg', 'bike.svg', 'box.svg', 'bus.svg', 'camera.svg', 'car.svg', 'droplet.svg', 'droplet2.svg', 'fire.svg', 'food.svg', 'genius.svg', 'globe.svg', 'layers.svg', 'leaf.svg', 'lightning.svg', 'power.svg', 'server.svg', 'shop.svg', 'snowflake.svg', 'snowy5.svg', 'telescope.svg', 'truck.svg', 'truck2.svg', 'weather.svg'];handleRoutingErrors();


})();
