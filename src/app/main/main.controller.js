(function() {
  'use strict';

  angular
    .module('rmdrink')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, $analytics, $stateParams, rulez, Lightbox) {
    var vm = this;

    $analytics.pageTrack('/');

    vm.shareURL = "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Frickandmortydrinkinggame.com";
    vm.rickedness = $stateParams["rickedness"] || 1;

    vm.fourtwenty = false;

    $scope.$watch(function () {
       return vm.rickedness;
    },function(value){
        if (value == 420) {
          // #420blazeit
          vm.fourtwenty = true;
        }
        else {
          vm.fourtwenty = false;
        }

        window.location.hash = "#/"+vm.rickedness;
    });

    // Determine whether a give rule is in the current rickedness level
    vm.ricked = function(rule) {
      if (vm.rickedness >= rule.level && vm.rickedness != 420){
        return true;
      }
      else if (rule.level == 420 && vm.rickedness == 420) {
        // #420blazeit
        return true;
      }
      return false;
    };

    // Share on facebook was clicked, track this event
    vm.fbShare = function() {
      $analytics.eventTrack('shareClicked');
    };

    // Someone clicked my website!
    vm.siteClick = function() {
      $analytics.eventTrack('websiteClicked');
    };

    // Share on facebook was clicked, track this event
    vm.githubClick = function() {
      $analytics.eventTrack('githubClicked');
    };

    vm.rules = rulez;

    vm.images = [
      {
        'type': 'video',
        'url': 'https://www.youtube.com/watch?v=khrAhOrSZQc',
        'thumbUrl': 'https://i.ytimg.com/vi/khrAhOrSZQc/1.jpg'
      }
    ];

    var konami = new Konami();
    konami.code = function() {
      alert('Konami code!');
      Lightbox.openModal(vm.images,0);
    }
    konami.load();


  }
})();
