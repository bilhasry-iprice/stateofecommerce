
/**
 * bar chart function
 */

function barChart( _id, _values, format){

	var chart = c3.generate({
		bindto: '#'+_id,
	    data: {
	        columns : _values,
	        type: 'bar'
	    },
	    axis : {
	    	x : {
            tick: {
	                
					format: function (d) { 
						if( format == '%'){
							return d + " "+format; 	
						}else{
							return format + " " + d;
						}
						
					}
	            }
	        }
	    },
	    grid: {
	        x: {
	            show: true
	        },
	        y: {
	            show: true
	        }
	    }
	});
}

/**
 * horizontal chart function
 */

function horizontalChart( _id, _values, format){
	var chart = c3.generate({
		bindto: '#'+_id,
	    data: {
	    	x : 'x',
	        columns : _values,
	        type: 'bar'
	    },
	    axis : {
	    	rotated: true,
	    	y : {
            tick: {
	                
					format: function (d) { 
						if( format == '%'){
							return d + " "+format; 	
						}else{
							return format + " " + d;
						}
						
					}
	            }
	        },
	    	x: {
	            type: 'category' // this needed to load string x value
	        }
	    },
	    grid: {
	        x: {
	            show: true
	        },
	        y: {
	            show: true
	        }
	    }
	});
}

function putImage( _el ){

    _el.selectAll(".tick").each(function(d,i){        
        d3.select(this)
          .append('image')
          .attr('xlink:href', img)
          .attr('x',0 - 128)
          .attr('y',0 - 128)
          .attr('width',128)
          .attr('height',128);
    });
}

/**
 * pie chart function
 */

function splineChart( _id, data){
	var chart = c3.generate({
		bindto: '#'+_id,
	    data: {
	    	x : 'x',
        	columns: data,
        	type: 'spline'
	    },
	    axis : {
	    	x: {
	            type: 'category' // this needed to load string x value
	        }
	    },
	    grid: {
	        x: {
	            show: true
	        },
	        y: {
	            show: true
	        }
	    }
	});
}

/** 
 * combo chart function
 */

function comboChart( _id, chart1, chart2, data){

}

function stackedChart(_id, _values, _groups){
	var chart = c3.generate({
	bindto: '#'+_id,
    data: {
        columns: _values,
        type: 'bar',
        groups: _groups
    },
    axis : {
	    	rotated: true
	},
    grid: {
    	x: {
            show: true
        },
        y: {
            lines: [{value:0}],
            show: true
        }
    }
});
}