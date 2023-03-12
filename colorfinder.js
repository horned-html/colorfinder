const rightButton = document.getElementById('rightButton')
const leftButton = document.getElementById('leftButton')

var color = "#000000";

function randomColor() {
    color = "#";
    color += "aa1122";
    return color;
}

function setLeftColor() {
    leftButton.style.backgroundColor = randomColor();
}
function setRightColor() {
    rightButton.style.backgroundColor = randomColor();
}