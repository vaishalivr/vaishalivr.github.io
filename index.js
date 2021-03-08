//var width = 300;
//var height = 300;
    
	//var svg = d3.select('svg')
		//.attr('width', width)
		//.attr('height', height)
		//.attr('transform', 'translate(600,0)')
		//.append('g')
		//.attr('class', 'phyllotaxis');
	    
	//var radius = 3;
	//var points = d3.range(600).map(phyllotaxis(6));
	    
	//svg.selectAll('.point').data(points)
		//.enter()
		//.append('circle')
		//.transition()
		//.duration(3000)
  		//.attr("cx", function(d) { return d[0] + radius; })
	  	//.attr("cy", function(d) { return d[1]; })
  		//.attr("r", radius)
  		//.style("fill", "#008800");
	    
	 //function phyllotaxis(radius) {
    		//var theta = Math.PI * (3 - Math.sqrt(5));
    		//return function(i) {
      			//var r = radius * Math.sqrt(i), a = theta * i;
      			//return [
        			//width / 2 + r * Math.cos(a),
        			//height / 2 + r * Math.sin(a)
      //];
   // };
 // }

var width = 300,
    height = 300,
    radius = 100;

var theta = Math.PI * (3 - Math.sqrt(5)),
    spacing = 4,
    size = spacing - 1,
    speed = .01,
    index = 0,
    total = 600;

var canvas = d3.select("body").append("canvas")
    .attr("width", radius * 3)
    .attr("height", radius * 3)
    .style("position", "absolute")
    .style("left", width*2 + radius + "px")
    .style("top", height*2 + radius + "px")

var context = canvas.node().getContext("2d");

context.translate(radius, radius);

d3.timer(function() {
 
  for (var j = 0; index < total && j < speed; ++j) {
    var radius = spacing * Math.sqrt(++index),
        angle = index * theta,
        x = radius * Math.cos(angle),
        y = radius * Math.sin(angle);

    context.beginPath();
    context.arc(x, y, size, 0, 2 * Math.PI);
    context.fillStyle = '#1e90ff';
    context.fill();
  }
});
