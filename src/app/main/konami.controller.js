(function() {
  'use strict';

  angular
    .module('rmdrink')
    .controller('KonamiController', KonamiController);

  /** @ngInject */
  function KonamiController($mdDialog, $sce) {
    var vm = this;

    vm.cancel = function() {
      $mdDialog.cancel();
    };

    // The videos that we're gonna randomly choose from
    var videos = [
      {
        title: "X Gon' Give It To Ya",
        src: "https://www.youtube.com/embed/ExitLAP6F9U"
      },
      {
        title: "Butter",
        src: "https://www.youtube.com/embed/X7HmltUWXgs"
      },
      {
        title: "Get your shit together",
        src: "https://www.youtube.com/embed/jl17CYYSzUw"
      },
      {
        title: "Everybody needs a Plumbus in their home",
        src: "https://www.youtube.com/embed/eMJk4y9NGvE"
      }
    ];

    // Choose a random video
    var rand = Math.floor(Math.random() * videos.length);
    var video = videos[rand];

    // Display it in the iframe
    vm.src = $sce.trustAsResourceUrl(video.src);
    vm.title = video.title;
  }
})();
