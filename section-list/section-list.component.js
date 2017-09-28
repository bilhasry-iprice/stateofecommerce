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

            switch( type ){
              case 'horizontal-bar' : 
                pos = parseInt(pos);
                _values = data[pos].data;
                var format = data[pos].format;
                console.log(format);
                horizontalChart( _id, _values, format);

              break;
              case 'spline'         : 

                pos = parseInt(pos);
                _values = data[pos].data;
                splineChart( _id, _values);

              break;
              case 'doughnut' :
              break;
              case 'toggle-bar' :
                var format = data[pos].format;
                pos = parseInt(pos);
                _values = data[pos].data.overall;
                barChart( _id, _values, format)

                break;
              case 'toggle-stack':
                
                pos = parseInt(pos);
                _values = data[pos].data.overall;

                var groups = data[pos].groups;
                console.log(groups);
                stackedChart( _id, _values, groups);
                break;

              case 'toggle-horizontal' :
                var format = data[pos].format;
                pos = parseInt(pos);
                _values = data[pos].data.overall;
                horizontalChart( _id, _values, format);

                break;

            }
          });

        });

        $('.scroll-page').on('click', function(e){
          _target = $(e.currentTarget).attr('href');

          var $target = $(_target );
          if ($target.length) {
            $('html,body').animate({
              scrollTop: $target.offset().top - 120
            }, 1000);
            return false;
          }
        });
      }
    });
  }
});
