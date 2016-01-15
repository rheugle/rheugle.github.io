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


var mic;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  noStroke();
  colorMode(HSB);

  mic = new p5.AudioIn();
  mic.start();

  background(255);

}

function draw() {

  background(255);

  var d1 = map(mic.getLevel(), 0, 0.02, 0, 10);
  var d2 = map(mic.getLevel(), 0, 0.02, 0, 10);
  var d3 = map(mic.getLevel(), 0, 0.02, 0, d2);
  //console.log(d1,d2,d3)

  var v1 = createVector(d1,d2);
  var y = map(mic.getLevel(), 0, 0.2, height, 0);

  fill(random(255),random(255),random(255));

  for (var i=0;i<314;i++){
    ellipse(width/2+v1.x, height/2+v1.y, 10,10);
    v1.rotate(0.1); 
  }

  for (var i=0; i<width; i++){
    a = d2*sin(2*PI*i/d3);
    ellipse(i,height/2+a,3,3);
    ellipse(width/2+a,i,3,3);
  }


}




