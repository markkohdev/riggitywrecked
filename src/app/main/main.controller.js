(function() {
  'use strict';

  angular
    .module('rmdrink')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, $analytics, $stateParams, rulez, $mdDialog, $mdMedia) {
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

    // Detect the konami code and spawn the video dialog
    var konami = new Konami();
    konami.code = function() {
      vm.konamiVid();
    }
    konami.load();

    // Spawn that ish
    vm.konamiVid = function() {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: 'KonamiController',
        controllerAs: 'vm',
        bindToController: true,
        templateUrl: 'app/main/konami.tmpl.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true,
      });

      // $scope.$watch(function() {
      //   return $mdMedia('xs') || $mdMedia('sm');
      // }, function(wantsFullScreen) {
      //   $scope.customFullscreen = (wantsFullScreen === true);
      // });
    };


  }
})();
