var middleStartX = 200;
var middleStartY = 30;
var wordX = 120;
var wordY = 200;
var x = 1.5;
var lineWidth = 4;
var canvas, ctx;

$(document).ready(function(){
    canvas = document.getElementById("indexCanvas");
    ctx = canvas.getContext("2d");
    ctx.canvas.width  = 460;
    ctx.canvas.height = 250;
    drawLogo();
});


function drawLogo() {
    drawTail();
    drawHead();
    ctx.font="20px Arial";
    ctx.fillText("JOFY SPACE DESIGN", wordX, wordY);
}

function drawHead() {
    ctx.save();

    ctx.beginPath();
    var startPointX = middleStartX + 30;
    var startPointY = middleStartY + 35;

    ctx.translate(startPointX, startPointY);
    // ctx.rotate(180 * Math.PI / 180);

    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.strokeStyle = '#D9ABFF';
    ctx.moveTo(0 , 0);
    ctx.lineTo(-60 * x, 55* x);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-60 * x, 55* x);
    ctx.strokeStyle = '#FFDAAB';
    ctx.lineTo(0, 115* x);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#ABE4FF';
    ctx.moveTo(0, 115 * x);
    ctx.lineTo(60 * x, 55* x);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#D9ABFF';
    ctx.moveTo(60 * x, 55* x);
    ctx.lineTo(0, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#FFABAB';
    ctx.moveTo(-40 * x, 35 * x);
    ctx.lineTo(20 * x, 95 * x);
    ctx.stroke();
    ctx.restore();
}

function drawTail() {
    ctx.save();
    var startPointX = middleStartX + 30;
    var startPointY = middleStartY + 35;

    ctx.translate(startPointX, startPointY);
    // ctx.rotate(180 * Math.PI / 180);
 
    ctx.beginPath();
    ctx.strokeStyle = '#FFABAB';
    ctx.lineWidth = 2;
    ctx.moveTo(-30 * x, -35 * x);
    ctx.lineTo(30 * x, -35 * x);
    ctx.lineTo(0, -5 * x);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#FFDAAB';
    ctx.moveTo(0, -5 * x);
    ctx.lineTo(-30 * x, -35 * x);
    ctx.lineTo(-32.5 * x, -32.5 * x);
    ctx.lineTo(0, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#FFDAAB';
    ctx.moveTo(20 * x, -20 * x);
    ctx.lineTo(0, 0);
    ctx.moveTo(20 * x, -20 * x);
    ctx.lineTo(17.5 * x, -22.5 * x);
    ctx.stroke();
    ctx.restore();
}