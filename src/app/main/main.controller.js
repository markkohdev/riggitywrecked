(function() {
  'use strict';

  angular
    .module('rmdrink')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr) {
    var vm = this;

    vm.rules = [
      {
        rule: "Any time Rick burps",
        levels: []
      },
      {
        rule: "Any time Rick drinks",
        levels: []
      },
      {
        rule: "Any time Morty says \"Uhhh...Rick\"",
        levels: []
      },
      {
        rule: "Any time someone goes through a portal",
        levels: []
      },
      {
        rule: "WUBBALUBBADUBDUB!!!!",
        levels: []
      },
      {
        rule: "Any time Jerry does/says anything dumb",
        levels: []
      },
      {
        rule: "Any time there's a reference to Morty being \"slow\"",
        levels: []
      },
      {
        rule: "Any time Rick makes a new invention",
        levels: []
      },
      {
        rule: "Any time a fight scene begins",
        levels: []
      },
      {
        rule: "Any time Beth drinks wine",
        levels: []
      },
      {
        rule: "Any time Rick and Morty gets real",
        levels: []
      },
      {
        rule: "Any time they break the 4th wall",
        levels: []
      },
      {
        rule: "Any time a named character dies",
        levels: []
      },
      {
        rule: "Any time they talk about Beth being a horse surgeon",
        levels: []
      },
      {
        rule: "Any time Summer gets annoyed",
        levels: []
      },
      {
        rule: "Any time Morty wants to bail",
        levels: []
      },
      {
        rule: "Any time they mention a dimension",
        levels: []
      },
      {
        rule: "Any time they say the name of the epiode",
        levels: []
      },
      {
        rule: "Any time they spit on someone",
        levels: []
      },
      {
        rule: "Any time Morty or Summer gets it in",
        levels: []
      },
      {
        rule: "Any time Morty blows up",
        levels: []
      },
      {
        rule: "Mr. Poopybutthole = FINISH YOUR DRINK",
        levels: []
      }
    ];

  }
})();
