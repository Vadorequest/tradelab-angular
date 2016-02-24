angular.module('app').config(function($stateProvider){
    return $stateProvider
        .state('app', {
            abstract: true,
            url: '/app/index.html',
            //resolve: {
            //    _cities: function(CityService) {
            //        console.log('Fetching cities...')
            //        return CityService.fetchAll();
            //    },
            //},
            sticky: true
        });
});