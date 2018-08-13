(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

// 'item' is injected through state's resolve
CategoryController.$inject = ['MenuDataService']
function CategoryController(MenuDataService) {
  var categories = this;

  categories.promise = MenuDataService.getAllCategorie();

  promise.then(function(response) {
    categories.fullList = response.data;
  })
  .catch(function(error) {
      console.log(error);
  });

}

})();
