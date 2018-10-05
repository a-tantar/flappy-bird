function Bird() {
    this.y = width / 2;
    this.x = 64;
    this.gravity = 1;
    this.lift = -17;
    this.velocity = 0;

    this.show = function () {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
        /* var img = loadImage("./flappy.jpg");
        image(img, 0, height / 2, img.width / 2, img.height / 2); */
    }
    this.up = function () {
        this.velocity += this.lift;
    }


    this.update = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }


    }

}