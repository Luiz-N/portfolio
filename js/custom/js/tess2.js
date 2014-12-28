

buildTess = function(width,height){
    // var counter = 0;
    var svg;
    var path,path2,path3;
    var animate;
    var points = 45;
    var width = width,
      height = height;
    var vertices,
        vertices2,
        vertices3;
    var point = [1,1];
    var xVelocity = width * 0.002;
    var yVelocity = height * 0.0025;
    var md = new MobileDetect(window.navigator.userAgent);

    if (md.phone() != null ) {
      points = 30; 
    };

    loadVertices(points);

    function newVertices(points) {
      return d3.range(points).map(function(d) {
      return [Math.random() * width, Math.random() * height];
      });
    }

    var voronoi = d3.geom.voronoi()
        .clipExtent([[0, 0], [width, height]]);
        // debugger;
      // console.log(voronoi(vertices));

    function zoomView() {
          var points = vertices.length;
          var fontSize = parseInt($("div.top h1").css("font-size").split("px")[0]);
          if (points >= 20) {
            points = points-10;
            $("div.top h1").css("font-size",fontSize+10);
          }
          loadVertices(points);
          render();

    };

    var drag = d3.behavior.drag()
        .on("dragstart", function() {
            clearInterval(animate);
        })
        .on("drag", function(){
          touchXY = [d3.event.x,d3.event.y];
          point = touchXY;
          render();
        })
        .on("dragend", function() {
          animate = setInterval(function(){render();}, 5);
        })


    
      svg = d3.select("#canvas-svg").append("svg")
        .attr("width", width)
        .attr("height", height)
        .on("mousemove", function() {
          clearInterval(animate);
          var mouseXY = d3.mouse(this);
          point = mouseXY;
          render();
          })
        .on("click",function(){
          var mouseXY = [d3.event.x,d3.event.y];
          point = mouseXY;
          zoomView(point);
        })
        .on('mouseleave', function() {
          console.log("mouseleave");
          animate  = setInterval(function(){render();}, 5);
        })
        .call(drag);
      path = svg.append("g").selectAll("path");
      path2 = svg.append("g").selectAll("path");
      path3 = svg.append("g").selectAll("path");


  svg.append("rect")
      .attr("width", width)
      .attr("height", height);

  // animate([0,0]);
  animate = setInterval(function(){render();}, 5);
  render();

  function render () {
    var crntX = point[0];
    var crntY = point[1];
    var newX, newY;
    // debugger;
    if (crntX >= width || crntX <= 0 ) {
      xVelocity *= -1;
    }
    if (crntY >= height || crntY <= 0 ) {
      yVelocity *= -1;
    }
    // else if(){
    
    newX = crntX + xVelocity;
    newY = crntY + yVelocity;

    // };

    // var newY = crntY + yVelocity;
    redraw([newX,newY]);
    // redraw2([newX,newY]);
    // redraw3([newX,newY]);
    point = [newX,newY];
    // debugger;

    
  }

  function  loadVertices(points){
    vertices = newVertices(points);
    vertices2 = newVertices(points);
    vertices3 = newVertices(points);
  };

   function redraw(mouseXY) {
      vertices[0] = mouseXY;
      path = path.data(voronoi(vertices), polygon);
      path.exit().remove();
      path.enter().append("path")
          .attr("d", polygon);
      path.order();

            vertices2[0] = mouseXY;
      path2 = path2.data(voronoi(vertices2), polygon);
      path2.exit().remove();
      path2.enter().append("path")
          .attr("d", polygon);
      path2.order();

            vertices3[0] = mouseXY;
      path3 = path3.data(voronoi(vertices3), polygon);
      path3.exit().remove();
      path3.enter().append("path")
          .attr("d", polygon);
      path3.order();
    }
    // function redraw2(mouseXY) {
    //   vertices2[0] = mouseXY;
    //   path2 = path2.data(voronoi(vertices2), polygon);
    //   path2.exit().remove();
    //   path2.enter().append("path")
    //       .attr("d", polygon);
    //   path2.order();
    // }
    // function redraw3(mouseXY) {
    //   vertices3[0] = mouseXY;
    //   path3 = path3.data(voronoi(vertices3), polygon);
    //   path3.exit().remove();
    //   path3.enter().append("path")
    //       .attr("d", polygon);
    //   path3.order();
    // }

  function polygon(d) {
    return "M" + d.join("L") + "Z";
  }

  function getRandom() {
    return Math.random() * (10 - 3) + 3;
  }
};
