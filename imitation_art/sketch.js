// // Learning Processing
// // Daniel Shiffman
// // http://www.learningprocessing.com
// // Example 1-1: stroke and fill

//Sound Components
var osc;

var particles = [];
var N = 400;

function setup() {

  //createCanvas(windowWidth, windowHeight);
  createCanvas(800,400);
  noStroke(); 
  background(255);

  for (var i=0;i<N;i++){
    particles.push(new particle());
  }

  for (var i=0;i<N;i++){
    particles[i].oscillate();
  }

}

function draw(){
  for (var i=0;i<N;i++){
    particles[i].move();
    particles[i].display(); 
  }
  background(255,255,255,20);
}

function particle(){
  
  //console.log(this);
  this.distance = random(20,320);
  this.radius = random(2,30);
  this.theta = 0;
  this.x = 0;
  this.y = 0;
  this.inc = random(-0.02,0.02);
  this.frequency = this.distance/(320)*1000;

  this.r = random(50,200);
  this.g = random(200,220);
  this.b = random(0);
  this.alph = random(0,255);

  this.move = function(){
     this.theta += this.inc;
     this.x = windowWidth/2+this.distance*cos(this.theta);
     this.y = windowHeight/2+this.distance*sin(this.theta);
     console.log()
  }

  this.display = function(){
    fill(this.r,this.g,this.b,this.alph);
    ellipse(this.x,this.y,this.radius,this.radius);
  }

  this.oscillate = function(){
    this.osc = new p5.Oscillator();
    this.osc.setType('sine');
    this.osc.freq(this.frequency);
    this.osc.amp(2.0);
    this.osc.start();
  }
  
}