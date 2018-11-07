;(function () {
    'use strict';

    angular
        .module('app')
        .controller('HeaderCtrl', HeaderCtrl);

    HeaderCtrl.$inject = ['$scope'];
    function HeaderCtrl($scope) {
        var vm = this;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        document.getElementById("mySidenav").style.width = "0";
        function openNav() {
            document.getElementById("mySidenav").style.width = "300px";
        }
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
    }

})();
