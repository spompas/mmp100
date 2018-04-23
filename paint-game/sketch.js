// color variables
var r, g, b;
var r2, g2, b2;

function setup() {
    createCanvas(800, 400);
    // color randomizer
    r = random(255);
    g = random(255);
    b = random(255);
    // background(random(55));

    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
}

function draw() {
    fill('black');

    noStroke();
    text('Press Here To Change color', 70, 20)


    textSize();
    text('Selected Color', 109, 255)

    // background(55);
    // create circle
    strokeWeight(1);
    stroke(r, g, b);
    fill(r, g, b, 127);
    ellipse(150, 100, 100, 100);

    // fill(r, g, b, 127);
    // ellipse(212, 150, 200, 200);
    stroke(r2, g2, b2);
    fill(r2, g2, b2, 127);
    ellipse(150, 300, 55, 55);

    fill(r2, g2, b2);
    ellipse(mouseX, mouseY, 4, 1);
    // print(mouseX,mouseY);
}

function mousePressed() {
    // background(55);
    // mouse checker
    var d = dist(mouseX, mouseY, 160, 100);
    if (d < 50) {
        // random colors
        r = random(255);
        g = random(255);
        b = random(255);
        var d2 = dist(mouseX, mouseY, 160, 100);
        if (d2 < 50) {
            // random colors
            r2 = random(255);
            g2 = random(255);
            b2 = random(255);
        }
    }
}
