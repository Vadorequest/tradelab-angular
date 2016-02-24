angular.module('app').service('CityService', function($http){
    this.cities = [];
    this.req = null;

    this.fetchAll = function(){
        if (this.req) {
            return this.req;
        }

        this.cities.splice(0, this.cities.length);
        this.req = $http.get('mocks/cities-fr.json');
        this.req.success((function(_this) {
            return function(cities) {
                _this.cities = cities;
                console.log(_this.cities)
                return _this.req = null;
            };
        })(this));
        return this.req;
    }
});