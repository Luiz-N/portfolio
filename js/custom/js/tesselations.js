// /*--- IMPORTANT GUIDELINES --- 
// 1. Use div #canvas-svg for svg rendering
//     var svg = d3.select("#canvas-svg");
// 2. 'data' variable contains JSON data from Data tab
//    'config' variable contains data from Properties tab
//     Do NOT overwrite these variables
// 3. To define customizable properties, use capitalized variable names,
//     and define them in Properties tab ---*/

// // var WIDTH = config.width, HEIGHT = config.height;
// var counter = 0;
// // var voronoi = d3.geom.voronoi();
// // var svg = d3.select("#canvas-svg");

// // var voronoi = d3.geom.voronoi();

// // var redraw = function(verts, path) {
// //   var path = path
// //       .data(voronoi(verts), polygon);

// //   path.exit().remove();
// //   // console.log(d);
// //   path.enter().append("path")
// //       .attr("class", function(d, i) {return "q" + (i % 2) + "-9"; })
// //       .attr("d", polygon);

// //   path.order();
// // }
// function polygon(d) {
  
//   return "M" + d.join("L") + "Z";
// }
// var width = verge.viewportW(),
//   height = verge.viewportH();

// function createTess(selector){
//   var self = this;
  
//   this.vertices = d3.range(10).map(function(d) {
//     return [Math.random() * width, Math.random() * height];
//   });

//   this.voronoi = d3.geom.voronoi()
//       .clipExtent([[0, 0], [width, height]]);
//       // debugger;
//     // console.log(this.voronoi(self.vertices));

//   this.svg = d3.select(selector).append("svg")
//       .attr("width", width)
//       .attr("height", height)
//       .on("mousemove", function() { self.vertices[0] = d3.mouse(this); self.redraw(); });
  
//   this.path = this.svg.append("g").selectAll("path");
//   // debugger;
//   // this.svg.on("mousemove", function() { self.vertices[0] = d3.mouse(this);  self.redraw(self.vertices,self.path,self.voronoi); });

//   this.svg.selectAll("circle")
//       .data(self.vertices.slice(1))
//       .enter().append("circle")
//       .attr("transform", function(d) { return "translate(" + d + ")"; })
//       .attr("r", 1);

//   // var path = self.path
//   //     .data(self.voronoi(self.vertices), polygon);

//   // path.exit().remove();

//   // path.enter().append("path")
//   //     .attr("class", function(d, i) { return "q" + (i % 9) + "-9"; })
//   //     .attr("d", polygon);

//   // path.order();

//   this.redraw = function() {
//     path = this.path.data(self.voronoi(self.vertices), polygon);
//     // console.log(self.voronoi());
//     path.exit().remove();
//     // debugger;

//     // self.path.exit().remove();
//     // console.log(d);
//     path.enter().append("path")
//         .attr("class", function(d, i) {return "q" + (i % 2) + "-9"; })
//         .attr("d", polygon);

//     // path.order();
//   };

//   // this.redraw(self.vertices, self.path,self.voronoi);

//   // var redraw = function(){};
// };

// // createTess.prototype.redraw = function(verts, path,voronoi) {
// //   var path = path
// //       .data(voronoi(verts), polygon);

// //   path.exit().remove();
// //   // console.log(d);
// //   path.enter().append("path")
// //       .attr("class", function(d, i) {return "q" + (i % 2) + "-9"; })
// //       .attr("d", polygon);

// //   path.order();
// // };


// tess1 = new createTess("#canvas-svg").redraw();
// // tess1.redraw();
// // tess1.redraw();
// // tess2 = new createTess("#canvas-svg2");
// // $(selector).siblings().attr({"z-index": counter++});

// //   vertices2 = d3.range(5).map(function(d) {
// //   return [Math.random() * width, Math.random() * height];
// // });

// // var voronoi = d3.geom.voronoi()
// //     .clipExtent([[0, 0], [width, height]]);

// // var svg2 = d3.select("#canvas-svg2").append("svg")
// //     .attr("width", width)
// //     .attr("height", height)
// //     .on("mousemove", function() { vertices2[0] = d3.mouse(this);d3.select("#canvas-svg").style({"z-index": counter++}); redraw(vertices2); });

// // var path = svg2.append("g").selectAll("path");

// // svg2.selectAll("circle")
// //     .data(vertices2.slice(1))
// //   .enter().append("circle")
// //     .attr("transform", function(d) { return "translate(" + d + ")"; })
// //     .attr("r", 1);

// // redraw(vertices2,path);

// // function redraw2() {
// //   path = path
// //       .data(voronoi(vertices2), polygon);

// //   path.exit().remove();
// //   // console.log(d);
// //   path.enter().append("path")
// //       .attr("class", function(d, i) { return "q" + (i % 2) + "-9"; })
// //       .attr("d", polygon);

// //   path.order();
// // }

// // function polygon(d) {
  
// //   return "M" + d.join("L") + "Z";
// // }
