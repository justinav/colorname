$(document).ready(function() {
  // 	pick any color you like
  $(".box").click(function() {
    $(this)
      .clone()
      .appendTo("#colors");
  });

  //  startover
  $("button").click(function() {
    $("#colors").empty();
  });
});

d3.csv("colors.csv", function(error, data) {
  if (error) return console.warn(error);

  var grid = d3
    .select("#colorGrid")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "box")
    .attr("id", function(d) {
      return d.colorname;
    })
    .append("div")
    .attr("class", "wrapper");

  grid.append("div").attr("class", function(d) {
    return "circle " + d.bgClass;
  });

  grid.append("p").text(function(d) {
    return d.colorname;
  });

  grid.append("p").text(function(d) {
    return "rgb(" + d.rgb + ")";
  });

  grid.append("p").text(function(d) {
    return d.hex;
  });

  // var box = d3.select(".box");
  // box.on("click", function(){
  //   // write function to clone + append boxes to #colors
  // })
});
