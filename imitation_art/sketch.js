// // Learning Processing
// // Daniel Shiffman
// // http://www.learningprocessing.com
// // Example 1-1: stroke and fill

//Sound Components
var sketch_imitationArt = function(p) {

var osc;

var particles = [];
var N = 200;

p.setup = function(){
//function setup() {

  //createCanvas(windowWidth, windowHeight);
  p.createCanvas(p.windowWidth, p.windowHeight);
  p.noStroke(); 
  p.background(255);

  for (var i=0;i<N;i++){
    particles.push(new p.particle());
  }

  for (var i=0;i<N;i++){
    particles[i].oscillate();
  }

}

p.draw = function(){
//function draw(){
  for (var i=0;i<N;i++){
    particles[i].move();
    particles[i].display(); 
  }
  p.background(255,255,255,20);
}

p.particle=function(){
  
  //console.log(this);
  this.distance = p.random(20,320);
  this.radius = p.random(2,30);
  this.theta = 0;
  this.x = 0;
  this.y = 0;
  this.inc = p.random(-0.02,0.02);
  this.frequency = this.distance/(320)*1000;

  this.r = p.random(200,250);
  this.g = p.random(100,150);
  this.b = p.random(100);
  this.alph = p.random(0,255);

  this.move = function(){
     this.theta += this.inc;
     this.x = p.windowWidth/2+this.distance*p.cos(this.theta);
     this.y = p.windowHeight/2+this.distance*p.sin(this.theta);
     console.log()
  }

  this.display = function(){
    p.fill(this.r,this.g,this.b,this.alph);
    p.ellipse(this.x,this.y,this.radius,this.radius);
  }

  this.oscillate = function(){
    this.osc = new p5.Oscillator();
    this.osc.setType('sine');
    this.osc.freq(this.frequency);
    this.osc.amp(2.0);
    this.osc.start();
  }

}

}
