
/**
 * bar chart function
 */

function barChart( _id, _values){

	var chart = c3.generate({
		bindto: '#'+_id,
	    data: {
	    	x : 'x',
	        columns : _values,
	        type: 'bar'
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

function horizontalChart( _id, _values){
	var chart = c3.generate({
		bindto: '#'+_id,
	    data: {
	    	x : 'x',
	        columns : _values,
	        type: 'bar'
	    },
	    axis : {
	    	rotated: true,
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