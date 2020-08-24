var radio;
var checkbox;
var checkBool;

function setup() {
  createCanvas(400, 400);
  checkbox = createCheckbox('gefüllt', false);
  checkbox.position(10,35);
  checkbox.style('font-family', 'Helvetica');
  checkbox.changed(myCheckedEvent);  
  
  radio = createRadio();
  radio.option('80 Pixel');
  radio.option('150 Pixel');
  radio.option('200 Pixel');
  radio.style('width', '90px');
  radio.style('font-family', 'Helvetica');
  radio.position(100,35);
}

function draw() {
  background(255);
  var durchmesser = 50;
  fill(0);
  stroke(0);
  textSize(18);
  text('Kreiseigenschaften: ', 8, 20);
  stroke('teal');
  if (radio.value() == '80 Pixel') { durchmesser = 80 }
  if (radio.value() == '150 Pixel') { durchmesser = 150 }
  if (radio.value() == '200 Pixel') { durchmesser = 200 }
  if (checkBool) { fill('green') }
  else { noFill() }
  ellipse(width/2, height/2, durchmesser, durchmesser);
}

function myCheckedEvent() {
  if (this.checked()) {
    checkBool = true;
  } else {
    checkBool = false;
  }
}