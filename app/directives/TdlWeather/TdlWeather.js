angular.module('app').directive('tdlWeather', function(CityService){
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'directives/tdlWeather/tdlWeather.html',
        scope: {
            title: '@title'
        },
        resolve: function(){
            console.log('resolve')
        },
        controller: function(){

        },
        link: function(scope, elem, attrs) {
            scope.cities = [];

            $.get('mocks/cities-fr.json')// TODO Use service... But data must have been fetched before.
                .success(function(cities){
                    scope.cities = cities;
                    scope.city = scope.cities[0];
                    scope.$apply();
                });

            scope.onChange = function(input){
                console.log(input)
            };
        }
    }
});