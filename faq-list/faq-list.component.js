a.component('faqList', {
    templateUrl: 'faq-list/faq-list.template.html',
    controller: function faqController( $scope, $http ) {
      $http({
      	method: "GET",
      	url: "data/data.json"
      }).then(function mySuccess(response){
        console.log(response);
      	 $scope.faq = response.data.faq;
      });
    }
  });
