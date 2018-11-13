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

  var box = d3.selectAll(".circle");
  box.on("click", function() {
    var cloneBox = d3.select(this.parentNode).html();
    var colors = d3
      .select("#colors")
      .append("div")
      .attr("class", "box")
      .append("div")
      .attr("class", "wrapper")
      .html(cloneBox);
  });

  var clearBtn = d3.select("button");
  clearBtn.on("click", function() {
    d3.selectAll("#colors > div").remove();
  });
});
