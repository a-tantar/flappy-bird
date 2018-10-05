/* setSpeed(Number(getSpeed()) + 0.9);
setFrames(Number(getFrames()) - 3); */

function Pipe() {

    var spacing = random(70, height / 2);
    var centery = random(spacing, height - spacing);

    this.top = centery - spacing / 1;
    this.bottom = height - (centery + spacing / 2);
    this.x = width;
    this.w = 40;
    this.speed = getSpeed();

    this.hightlight = false;

    this.hits = function (bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.hightlight = true;
                return true;
            }
        }
        this.hightlight = false;
        return false;

    }

    this.show = function () {
        fill(255);
        if (this.hightlight) {
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    }
    this.update = function () {
        this.x -= this.speed;
    }
    this.offscreen = function () {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }

}