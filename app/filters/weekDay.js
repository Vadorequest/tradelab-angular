angular.module('app').filter('weekDay', function() {
    return function(input) {
        return moment(input, 'X').format('ddd');
    };
});