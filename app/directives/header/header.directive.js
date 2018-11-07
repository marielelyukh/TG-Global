;(function () {
    angular.module('directives.landHeader', [])
        .directive('landHeader', landHeader);

    landHeader.$inject = ['$document', '$timeout'];

    function landHeader($document, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'directives/header/header.html',
            scope: {

            },
            controller: 'HeaderCtrl',
            controllerAs: 'vm',
            link: function (scope, element, attrs) {

            }
        };
    }
})();

