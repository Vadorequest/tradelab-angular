angular.module('app').service('WeatherService', function($http){
    this.currentEndpointUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=44db6a862fba0b067b1930da0d769e98&units=metric';
    this.forevastEndpointUrl = 'http://api.openweathermap.org/data/2.5/forecast?appid=44db6a862fba0b067b1930da0d769e98&units=metric';

    this.getCurrent = function(city){
        var url = this.currentEndpointUrl + '&lat=' + city.lat + '&lon=' + city.lon;

        return $http.get(url);
    }
});