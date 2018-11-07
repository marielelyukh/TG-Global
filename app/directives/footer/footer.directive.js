;(function () {
    angular.module('directives.landFooter', [])
        .directive('landFooter', landFooter);

    landFooter.$inject = ['$document', '$timeout'];

    function landFooter($document, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'directives/footer/footer.html',
            scope: {

            },
            controller: 'FooterCtrl',
            controllerAs: 'vm',
            link: function (scope, element, attrs) {

            }
        };
    }
})();

