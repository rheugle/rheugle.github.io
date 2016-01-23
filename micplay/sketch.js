// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com
// Example 1-1: stroke and fill

// var x,y;
// var bugs = [];

// function setup() {
//   createCanvas(screen.width, screen.height);
//   stroke(10); 
//   fill(20,20,20);
//   background(240);

//   for (var i=0;i<20;i++){
//   	bugs.push(new Jitter());
//   }
// }

// function draw(){

//   background(240);

//   for (var i=0;i<20;i++){
//   	bugs[i].move();
//   	bugs[i].display();
//   }
  
// }

// // Jitter class
// function Jitter() {
//   this.x = random(screen.width);
//   this.y = random(screen.height);
//   this.velocityx = random(-5,5);
//   this.velocityy = random(-10,10);
//   this.diameter = random(4);

//   this.move = function() {
//   	this.x += this.velocityx;
// 	this.y += this.velocityy;
//   };

//   this.display = function() {
//     ellipse(this.x, this.y, this.diameter, this.diameter);
//   };
// };

var sketch_micPlay = function(p) {

var mic;

p.setup = function(){
//function setup() {
  
  p.createCanvas(p.windowWidth,p.windowHeight);
  //p.createCanvas(800,400);
  p.noStroke();
  p.colorMode(p.HSB);

  mic = new p5.AudioIn();
  mic.start();
  p.background(255);

}

p.draw = function() {

  p.background(255);

  //var d1 = p.map(mic.getLevel(), 0, 0.02, 0, 10);
  //var d2 = p.map(mic.getLevel(), 0, 0.02, 0, 10);
  //var d3 = p.map(mic.getLevel(), 0, 0.02, 0, d2);
  //console.log(d1,d2,d3)

var d1 = p.map(p.mouseX,0,p.width,0,100);
var d2 = p.map(p.mouseX,0,p.windowWidth,0,100);
var d3 = p.map(p.mouseX,0,p.windowWidth,0,d2);

  var v1 = p.createVector(d1,d2);
  var y = p.map(p.mouseX,0,p.windowWidth*0.2,p.height,0);
  // var y = p.map(mic.getLevel(), 0, 0.2, p.height, 0);

  p.fill(120,130,130+p.frameCount);

  for (var i=0;i<314;i++){
    //p.ellipse(p.width/2+v1.x, p.height/2+v1.y, 10,10);
    v1.rotate(0.1); 
  }

  for (var i=0; i<p.width; i++){
    a = d2*p.sin(2*p.PI*i/d3);
    p.ellipse(i,p.height/2+a,4,4);
    p.ellipse(p.width/2+a,i,4,4);
  }

}

}


