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
    .style("left", width*3.5 + "px")
    .style("top", height/5 + "px")

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
