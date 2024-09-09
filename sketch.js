function setup() {
  createCanvas(600, 400);
}
function draw() {
  //sky blue background
  background(135, 206, 235);
  // sun in top-right corner
  fill("yellow"); //yellow
  ellipse(550,50,100)

  // Grass on bottom half
  fill("green")
  rect(0,200, 600, 200);

  // Emojis
  textSize(75)
  text ("🌸", 100, 250) // flower
  text ("🐭",mouseX, mouseY) // mouse
}
