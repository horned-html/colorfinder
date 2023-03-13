const rightButton = document.getElementById('rightButton')
const leftButton = document.getElementById('leftButton')

var color = "#000000";
var leftColor = "";
var rightColor = "";

function randomColor() {
    color = "#";
    var tempColor = "";
    for (let i = 0; i < 6; i++) {
        tempColor = (Math.floor(Math.random() * 16));
        switch(tempColor) {
            case 15:
                tempColor = "F";
                break;
            case 14:
                tempColor = "E";
                break;
            case 13:
                tempColor = "D";
                break;
            case 12:
                tempColor = "C";
                break;
            case 11:
                tempColor = "B";
                break;
            case 10:
                tempColor = "A";
                break;
        }
        color += tempColor;
    }
    console.log(color);
    return color;
}

function setLeftColor() {
    leftButton.style.backgroundColor = randomColor();
}
function setRightColor() {
    rightButton.style.backgroundColor = randomColor();
}

setLeftColor(); setRightColor();