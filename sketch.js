var bird;
var pipes = [];
/* 
var oldSpeed = Number(getSpeed());
var newSpeed= oldSpeed + 0.9;
setSpeed(newSpeed);
var oldFrames = Number(getFrames());
va newFrames = oldFrames - 3;
setFrames(newFrames); 

*/

function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    pipes.push(new Pipe());
    setSpeed(3);
    setFrames(90);
}

function draw() {
    background(500);


    for (var i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();
        if (pipes[i].hits(bird)) {
            console.log("HIT");
        }





        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }


    bird.update();
    bird.show();

    if (frameCount % getFrames() == 0) {
        pipes.push(new Pipe());
    }



}

function keyPressed() {
    if (key == " ") {

        bird.up()
        //console.log("SPACE");



    }
}