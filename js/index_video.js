var navList = ['avtive', 'video', 'protfolio', 'about us'];
var navHypList = ['active_list.html', 'active_video.html', 'protfolio.html', 'contact.html'];

var middleStartX = 70;
var middleStartY = 0;
var wordX = 0;
var wordY = 130;
var x = 0.6;
var canvas, ctx;

$(document).ready(function(){
    var navListHtml = "";
    $("footer").html('<p>Copyright © 2017 軸 於 空 間 — 保留所有權利。</p>' + 
    '<ul class = "iconUl">' + 
    '<li><img src = "img/if_Instagram_1298747.png"></li>' +
    '<li><img src = "img/if_square-facebook_317727.png"></li>' +
    '<li><img src = "img/if_youtube_317714.png"></li>' +
    '</ul');

    $("header").html('<canvas id = "indexCanvas"></canvas>');
    for (var list in navList) {
        console.log(navList[list]);
        navListHtml = navListHtml + "<div><a href = '" + navHypList[list]+ "'>" + navList[list] + "</a></div>";
    }
    console.log(navListHtml);
    $("nav").html(navListHtml);
    canvas = document.getElementById("indexCanvas");
    ctx = canvas.getContext("2d");
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

    ctx.lineWidth = 2;
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