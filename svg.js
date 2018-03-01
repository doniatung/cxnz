var svg = document.getElementById("vimage");
var oldx=0;
var oldy=0;
var counter = 0;

var change = function(e){
  e.preventDefault();
  this.setAttribute("fill", "green");
}

var drawDot = function(x,y){
  var newthing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  newthing.setAttribute("cx", x);
  newthing.setAttribute("cy", y);
  newthing.setAttribute("r", "30");
  newthing.setAttribute("fill", "yellow");
  newthing.setAttribute("stroke", "black");
  newthing.addEventListener("click", change);
  svg.appendChild(newthing);
  counter = 1;
}

var connect = function(x, y){
  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", oldx);
  line.setAttribute("y1", oldy);
  line.setAttribute("x2", x);
  line.setAttribute("y2", y);
  line.setAttribute("style", "file: black; stroke: red; stroke-width:4");
  svg.appendChild(line);
  oldx = x;
  oldy = y;
}

var clicked = function(e){
  if (e.toElement == this){
    var x = e.offsetX;
    var y = e.offsetY
    if (counter != 0){
      drawDot(e.offsetX, e.offsetY);
      connect(x,y);
      console.log("first")
    }
    else{
      //connect(x,y)
      drawDot(e.offsetX, e.offsetY);
      oldx = x;
      oldy = y;
      console.log("second")

    }
  }
};

var cleanse = function(e){
  var rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rectangle.setAttribute("x", "0");
  rectangle.setAttribute("y", "0");
  rectangle.setAttribute("fill", "pink");
  rectangle.setAttribute("width", "500");
  rectangle.setAttribute("height", "500");
  counter = 0;
  svg.appendChild(rectangle);
}

var clear = function(e){
  console.log("hi");
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }
    counter = 0;
};


var button = document.getElementById("clear");
button.addEventListener("click", cleanse);

svg.addEventListener("click", clicked);
