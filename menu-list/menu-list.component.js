a.component('menuList', {
    templateUrl: 'menu-list/menu-list.template.html',
    controller: function menuListController( $scope, $http ) {
      $http({
      	method: "GET",
      	url: "data/data.json"
      }).then(function mySuccess(response){
      	 $scope.menus = response.data.menus;
      });
    }
  });
