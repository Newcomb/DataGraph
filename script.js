
var useCSV = function(){
   var data = d3.csv("data.csv");
   data.then(
     function(data){
       console.log("data",data);
       makeChart(data);
     }
   ,
   function(err){
     console.log("err",err);

   });
}

var makeChart = function(data)
{
  var width = 1000;
  var height = 800;
  var xScale=d3.scaleLinear().domain([d3.min(data, funciton(d){return[0]}),1055369]).range([0,width]);
  var yScale=d3.scaleLinear().domain([d3.min(data, funciton(d){return[0]}),1055369]).range([0,height]);
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
     .attr("x",function(d,i){return xScale(i);})
     .attr("y",function(d){return yScale.(d[1]);})
     .attr("width",barWidth-2)
     .attr("height",function(d){return d.consumption/1500;})
     .attr("fill","black");

// labels
  svg.selectAll("text")
     .data(data)
     .enter()
     .append("text")
     .text(function(d){return d.num;})
     .attr("x",function(d,i){return (i+1)*barWidth-.5*barWidth;})
     .attr("y",function(d){return height-d.consumption/1500;})
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
     .attr("fill",function(d){return d.state;});

// legend labels
   svg.selectAll("text1")
      .data(data)
      .enter()
      .append("text")
      .text(function(d){return d.consumption;})
      .attr("x",function(d,i){return .825*width;})
      .attr("y",function(d,i){return (i+1)*20 - 6;})
      .attr("text-anchor","middle")
      .attr("fill","black");

  svg.style("margin-right","50px");
   

}
useCSV()
