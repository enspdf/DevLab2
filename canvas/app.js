var circleCanvas = $("circleCanvas");
var contextCircle = getCtx(circleCanvas);

var squareCanvas = $("squareCanvas");
var contextSquare = getCtx(squareCanvas);

var triangleCanvas = $("triangleCanvas");
var contextTriangle = getCtx(triangleCanvas);

function drawCircle() {
    contextCircle.beginPath();
    contextCircle.arc(circleCanvas.width / 4, circleCanvas.height / 2, 100, 0, 2 * Math.PI, false);
    contextCircle.fillStyle = "blue";
    contextCircle.fill();
    contextCircle.lineWidth = 5;
    contextCircle.strokeStyle = '#003300';
    contextCircle.stroke();
}

function drawSquare() {
    contextSquare.beginPath();
    contextSquare.rect(50, 50, 200, 200);
    contextSquare.fillStyle = "red";
    contextSquare.fill();
    contextSquare.lineWidth = 5;
    contextSquare.strokeStyle = '#003300';
    contextSquare.stroke();
}

function drawTriangle() {
    contextTriangle.beginPath();
    contextTriangle.moveTo(200, 0);
    contextTriangle.lineTo(300, 200);
    contextTriangle.lineTo(500, 100);
    contextTriangle.lineTo(200, 0);
    contextTriangle.fillStyle = "#F9A520"
    contextTriangle.fill();
    contextTriangle.lineWidth = 5;
    contextTriangle.strokeStyle = '#003300';
    contextTriangle.stroke();
}

function $(el) {
    return document.getElementById(el);
}

function getCtx(ctxElmt) {
    return ctxElmt.getContext("2d");
}

drawCircle();
drawSquare();
drawTriangle();