(function() {
  'use strict';

  angular
    .module('rmdrink')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $analytics, rulez, Lightbox) {
    var vm = this;

    $analytics.pageTrack('/');

    vm.shareURL = "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Frickandmortydrinkinggame.com";
    vm.rickedness = 1;

    // Determine whether a give rule is in the current rickedness level
    vm.ricked = function(rule) {
      if (vm.rickedness >= rule.level){
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
