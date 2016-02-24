angular.module('app', [
    'ui.router',
    'ct.ui.router.extras'
]).run(function($rootScope, CityService){
    console.log('app has started.')
});