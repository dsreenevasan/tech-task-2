(function(){
    'use strict';
    angular
        .module('moviesApp')
        .controller('MainController',MainController);
    MainController.$inject = ['$scope', '$state', '$interval'];
    function MainController($scope, $state, $interval){
        var ctrl = this;
        ctrl.navOpen = false;
        console.log("success");
        ctrl.maxWidth = 0;
        ctrl.langFilter = 0;
        ctrl.genreFilter = 0;
        ctrl.latestFilter = 0;
        ctrl.comingSoonFilter = 0;
        ctrl.movieList =   [{name: 'Blood Diamond', imageUrl: '../images/blood-diamond.JPG', language: {id: 1, name: 'English'}, genre: {id: 3, name: 'Drama'}, rating: '8/10', runtime: '150mins', latest: 0, comingSoon: 0},
                            {name: 'Now You See Me', imageUrl: '../images/now-you-see-me.JPG', language: {id: 1, name: 'English'}, genre: {id: 3, name: 'Drama'}, rating: '6.3/10', runtime: '130mins', latest: 0, comingSoon: 0},
                            {name: 'Gladiator', imageUrl: '../images/gladiator.JPG', language: {id: 1, name: 'English'}, genre: {id: 1, name: 'Action'}, rating: '8.9/10', runtime: '200mins', latest: 0, comingSoon: 0},
                            {name: 'Cry Wolf', imageUrl: '../images/cry-wolf.JPG', language: {id: 1, name: 'English'}, genre: {id: 3, name: 'Drama'}, rating: '7.1/10', runtime: '100mins', latest: 0, comingSoon: 0},
                            {name: 'Inside Out', imageUrl: '../images/inside-out.jpg', language: {id: 1, name: 'English'}, genre: {id: 4, name: 'Comedy'}, rating: '8.3/10', runtime: '145mins', latest: 0, comingSoon: 0},
                            {name: 'Thani Oruvan', imageUrl: '../images/thani-oruvan.png', language: {id: 2, name: 'Tamil'}, genre: {id: 2, name: 'Crime'}, rating: '8.5/10', runtime: '160mins', latest: 1, comingSoon: 0},
                            {name: 'Vellailla Pattadhari', imageUrl: '../images/vip.JPG', language: {id: 2, name: 'Tamil'}, genre: {id: 3, name: 'Drama'}, rating: '8.1/10', runtime: '180mins', latest: 0, comingSoon: 0},
                            {name: 'Iruthi Sutru', imageUrl: '../images/iruthi-sutru.JPG', language: {id: 2, name: 'Tamil'}, genre: {id: 3, name: 'Drama'}, rating: '9/10', runtime: '170mins', latest: 0, comingSoon: 0},
                            {name: 'Kabali', imageUrl: '../images/kabali.jpeg', language: {id: 2, name: 'Tamil'}, genre: {id: 2, name: 'Crime'}, rating: 'Yet to be rated', runtime: 'Yet to release', latest: 0, comingSoon: 1}];
        
        ctrl.displayNav = function() {
            ctrl.maxWidth = ctrl.maxWidth == 0 ? '50px' : 0;
            ctrl.navOpen = !ctrl.navOpen;
        };

        ctrl.chooseLang = function(lang){
            ctrl.genreFilter = 0;
            ctrl.latestFilter = 0;
            ctrl.comingSoonFilter = 0;
            ctrl.langFilter = lang;
        };

        ctrl.chooseGenre = function(genre){
            ctrl.langFilter = 0;
            ctrl.latestFilter = 0;
            ctrl.comingSoonFilter = 0;
            ctrl.genreFilter = genre;
        };

        ctrl.chooseLatest = function () {
            ctrl.langFilter = 0;
            ctrl.genreFilter = 0;
            ctrl.comingSoonFilter = 0;
            ctrl.latestFilter = 1;
        };

        ctrl.chooseComingSoon = function(){
            ctrl.langFilter = 0;
            ctrl.genreFilter = 0;
            ctrl.latestFilter = 0;
            ctrl.comingSoonFilter = 1;
        }
    }
})();

