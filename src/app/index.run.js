(function() {
  'use strict';

  angular
    .module('rmdrink')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
