function getSpeed() {
    return sessionStorage.getItem('speed');
}

function getFrames() {
    return sessionStorage.getItem('frames');
}

function setSpeed(newSpeed) {
    sessionStorage.removeItem('speed');
    sessionStorage.setItem('speed', newSpeed);
}

function setFrames(newFrames) {
    sessionStorage.removeItem('frames');
    sessionStorage.setItem('frames', newFrames);
}