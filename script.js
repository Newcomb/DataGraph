
var useCSV = function(){
   var data = d3.csv("data.csv");
   data.then(
     function(data){
       console.log("data",data);
       makeChart(data,"csv");
     }
   ,
   function(err){
     console.log("err",err);

   });
}

var makeChart = function(data)
{
  var width = 600;
  var height = 400;
  var barWidth = width/(data).length;
  var legHeight = height/(data).length;
  var svg;

    svg  = d3.select("svg")
    .attr("width",width)
    .attr("height",height);

// create the rectangles
  svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x",function(d,i){return i*barWidth;})
     .attr("y",function(d){return height - d.consumption/1000;})
     .attr("width",barWidth-2)
     .attr("height",function(d){return d.consumption/1000;})
     .attr("fill","black");

// labels
  svg.selectAll("text")
     .data(data)
     .enter()
     .append("text")
     .text(function(d){return d.num;})
     .attr("x",function(d,i){return (i+1)*barWidth-.5*barWidth;})
     .attr("y",function(d){return height-d.consumption/1000;})
     .attr("text-anchor","middle")
     .attr("fill","black");

/// legend
  svg.selectAll("rect1")
     .data(data)
     .enter()
     .append("rect")
     .attr("x",function(d,i){return .9*width;})
     .attr("y",function(d,i){return i*20+5;})
     .attr("width",20)
     .attr("height",10)
     .attr("fill",function(d){return d.color;});

// legend labels
   svg.selectAll("text1")
      .data(data)
      .enter()
      .append("text")
      .text(function(d){return d.color;})
      .attr("x",function(d,i){return .825*width;})
      .attr("y",function(d,i){return (i+1)*20 - 6;})
      .attr("text-anchor","middle")
      .attr("fill","black");

  svg.style("margin-right","50px");

}
useCSV()
makeChart(data)
