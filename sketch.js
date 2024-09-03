//Váriaveis
let cor;
let x;
let y;

function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  x = 200;
  y = 200;
}

function draw() {
//Círculo
  fill(cor);
  circle(x, y, 50);

//Movimento e interação
  if (mouseX < x) {
    x--;
  }
  
  if (mouseX > x) {
    x++;
  }
    
  if (mouseY < y) {
    y--;
  }
  
  if (mouseY > y) {
    y++;
  }
  
  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255));
  }
}
