(function () {
    'use strict';

    var core = angular.module('johoApp.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 5000;
        toastr.options.positionClass = 'toast-bottom-right';
        toastr.options.preventDuplicates = true;
        toastr.options.progressBar = true;
    }

    var config = {
        appErrorPrefix: '[Error] ',
        appTitle: 'Joho App'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
    }

})();