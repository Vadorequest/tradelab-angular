angular.module('app').directive('tdlWeather', function(CityService, WeatherService){
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
            scope.city = null;
            scope.cities = [];
            scope.current = null;
            scope.forecast = null;
            scope.helper = {
                isReady_current: false,
                isReady_forecast: false
            };

            // Load cities from JSON to populate the <select> options.
            $.get('mocks/cities-fr.json')// TODO Use service... But data must have been fetched before.
                .success(function(cities){
                    scope.cities = cities;
                    scope.city = scope.cities[0];
                    scope.$apply();

                    _updateCurrent(scope.city);
                    _updateForecast(scope.city);
                });

            _handleSuccessResponse = function(response, type){
                if(response.cod.toString() === '404'){
                    console.error(response);
                    alert("Impossible de localiser la ville demandée.");
                }else if(response.cod.toString() === '200'){
                    scope[type] = response;
                    scope.helper['isReady_' + type] = true;
                }else{
                    console.error(response);
                    alert("Une erreur est survenue.");
                }
            };

            _handleErrorResponse = function (data, httpCode) {
                if(httpCode === 429){
                    alert("Il y a trop d'appels HTTP à l'API. Veuillez réessayer dans quelques instants.")
                }
            };

            _updateCurrent = function(city){
                scope.helper.isReady_current = false;
                WeatherService.getCurrent(city)
                    .success(function(response){
                        _handleSuccessResponse(response, 'current');
                    })
                    .error(function(data, httpCode){
                        _handleErrorResponse(data, httpCode);
                    });
            };

            _updateForecast = function(city){
                scope.helper.isReady_forecast = false;
                WeatherService.getForecast(city)
                    .success(function(response){
                        _handleSuccessResponse(response, 'forecast');
                    })
                    .error(function(data, httpCode){
                        _handleErrorResponse(data, httpCode);
                    });
            };

            scope.onChange = function(input){
                console.log(input)
            };
        }
    }
});