(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

CategoryController.$inject = ['categories']
function CategoryController(categories) {
  var cactrl = this;
  cactrl.categories_list = categories.data;
  cactrl.saveSelectValue = function(value) {
    cactrl.selected = value;
    cactrl.selectedShortName = cactrl.categories_list[cactrl.selected].short_name;    
  }
}

})();
