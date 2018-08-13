(function(){
  'use strict';
  angular.module('data')
    .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$http','ApiBasePath','ApiItemPath'];
  function MenuDataService($http, ApiBasePath, ApiItemPath) {
    var service = this;

    service.getAllCategorie = function() {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      })
    };

    service.getItemsForCategory = function(categoryShortName){
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="
      })
    };


  }
})();
