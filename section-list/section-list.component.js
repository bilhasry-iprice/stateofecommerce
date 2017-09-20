var open = false;
a.
  component('sectionList', {
    templateUrl: 'section-list/section-list.template.html',
    controller: function sectionListController( $scope, $http, $location, $window, $sce) {
      $http({
        method: "GET",
        url: "data/section.data.json"
      }).then(function mySuccess(response){

          $scope.sections = response.data;
          $scope.trustAsHtml = function(html) {
            return $sce.trustAsHtml(html);
          }

          $window.onload = function(){
            $http({
              method: "GET",
              url: "data/graph.data.json"
            }).then(function mySuccess(response){
              var data = response.data;
              $('.chart').each(function(){
                var type    = $(this).attr('type');
                var _id     = $(this).attr('id');
                var _title  = $(this).attr('data-title');
                var pos     = $(this).attr('data-pos');
                var _labels = data[0].labels; var _values = data[0].data; var _bgs=[];
                console.log(_values);
                switch( type ){
                  case 'horizontal-bar' : 
                      console.log(pos);
                      pos = parseInt(pos);
                      _values = data[pos].data;
                      horizontalChart( _id, _values);

                    break;
                  case 'spline'         : 
                      
                      pos = parseInt(pos);
                      _values = data[pos].data;
                      splineChart( _id, _values);

                    break;
                  case 'doughnut' :
                    break;
                }
              });
              
            });
            
          }
      });
    }
  });
