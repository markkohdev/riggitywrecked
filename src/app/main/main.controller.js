(function() {
  'use strict';

  angular
    .module('rmdrink')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $analytics) {
    var vm = this;

    $analytics.pageTrack('/');

    vm.rickedness = 1;

    vm.ricked = function(rule) {
      if (vm.rickedness >= rule.level){
        return true;
      }
      return false;
    };

    vm.rules = [
      {
        rule: "Any time Rick burps",
        level: 3
      },
      {
        rule: "Any time Rick drinks",
        level: 2
      },
      {
        rule: "Any time Morty says \"Uhhh...Rick\"",
        level: 2
      },
      {
        rule: "Any time someone goes through a portal",
        level: 1
      },
      {
        rule: "WUBBALUBBADUBDUB!!!!",
        level: 1
      },
      {
        rule: "Any time Jerry does/says anything dumb",
        level: 1
      },
      {
        rule: "Any time anyone says \"bitch\", BITCH!",
        level: 3
      },
      {
        rule: "Any time there's a reference to Morty being \"slow\"",
        level: 1
      },
      {
        rule: "Any time Rick makes a new invention",
        level: 1
      },
      {
        rule: "Any time a fight scene begins",
        level: 2
      },
      {
        rule: "Any time Beth drinks wine",
        level: 1
      },
      {
        rule: "Any time Rick and Morty gets real",
        level: 1
      },
      {
        rule: "Any time they break the 4th wall",
        level: 1
      },
      {
        rule: "Any time a named character dies",
        level: 3
      },
      {
        rule: "Any time they talk about Beth being a horse surgeon",
        level: 1
      },
      {
        rule: "Any time Summer gets annoyed",
        level: 2
      },
      {
        rule: "Any time Morty wants to bail",
        level: 2
      },
      {
        rule: "Any time they mention a dimension",
        level: 3
      },
      {
        rule: "Any time they say the name of the epiode",
        level: 1
      },
      {
        rule: "Any time they spit on someone",
        level: 1
      },
      {
        rule: "Any time Morty or Summer gets it in",
        level: 1
      },
      {
        rule: "Any time Morty blows up",
        level: 1
      },
      {
        rule: "Mr. Poopybutthole = FINISH YOUR DRINK",
        level: 2
      }
    ];

  }
})();
