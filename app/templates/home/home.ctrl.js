;(function () {
    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    /* @ngInject */
    function HomeCtrl() {
        var vm = this;
        vm.services = [
            {
                img: 'content/img/forecs.png',
                title: 'Форекс и бинарные опцины',
                subtitle: 'Предоставление полного спектра услуг по созданию Форекс Брокера или Бинарные Опционы.'
            },
            {
                img: 'content/img/comerce.png',
                title: 'Электронная комерция',
                subtitle: 'Предоставление полного спектра услуг на получение Финансовых Лицензий для Электронной комерции.'
            },
            {
                img: 'content/img/license.png',
                title: 'Лицензия',
                subtitle: 'Предоставление полного спектра услуг для финансовых лицензий.'
            },
            {
                img: 'content/img/law.png',
                title: ' Юридические заключения',
                subtitle: 'Юридическое заключение адвоката из Великобритании и адвокат из Сент Винсент и Гренадины для оффшорных компаний Форекс, Бинарные опционы, Крипта, К О.'
            }
        ]
    }
})();