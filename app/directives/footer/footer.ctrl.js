;(function () {
    'use strict';

    angular
        .module('app')
        .controller('FooterCtrl', FooterCtrl);

    FooterCtrl.$inject = ['$scope'];
    function FooterCtrl($scope) {
        var vm = this;
    }

})();
