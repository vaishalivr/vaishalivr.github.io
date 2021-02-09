var width = 300;
var height = 300;
    
	var svg = d3.select('svg')
		.attr('width', width)
		.attr('height', height)
		.attr('transform', 'translate(1000,0)')
		.append('g')
		.attr('class', 'phyllotaxis');
	    
	var radius = 3;
	var points = d3.range(600).map(phyllotaxis(6));
	    
	svg.selectAll('.point').data(points)
		.enter().append('circle')
  		.attr("cx", function(d) { return d[0] + radius; })
	  	.attr("cy", function(d) { return d[1]; })
  		.attr("r", radius)
  		.style("fill", "#008800");
	    
	 function phyllotaxis(radius) {
    		var theta = Math.PI * (3 - Math.sqrt(5));
    		return function(i) {
      			var r = radius * Math.sqrt(i), a = theta * i;
      			return [
        			width / 2 + r * Math.cos(a),
        			height / 2 + r * Math.sin(a)
      ];
    };
  }
