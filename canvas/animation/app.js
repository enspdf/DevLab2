var canvas;  
var ctx;
var x = 400;
var y = 300;
var dx = 2;
var dy = 4;
var WIDTH = 400;
var HEIGHT = 300; 

function square(x, y) {
    ctx.beginPath();
    ctx.rect(x, x - 100, y, y - 100);
    ctx.fill();
}

function rect(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
}

 
function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(draw, 10);
}


function draw() {
    clear();
    ctx.fillStyle = "gray";
    rect(0,0,WIDTH,HEIGHT);
    ctx.fillStyle = "#444444";
    square(x, y);

    if (x + dx > WIDTH || x + dx < 0)
        dx = -dx;
    if (y + dy > HEIGHT || y + dy < 0)
        dy = -dy;

    x += dx;
    y += dy;
}

init();