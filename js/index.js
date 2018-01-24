var navList = ['news', 'active', 'project', 'contact'];
var navHypList = ['index.html', 'active.html', 'project.html', 'contact.html'];

$(document).ready(function(){
    var navListHtml = "";
    $("footer").html('<p>Copyright © 2017 軸 於 空 間 — 保留所有權利。</p>');
    $(".mobile-header-content").html(
        "<div class = 'mobile-logo-wrap'>" + 
            "<div class = 'mobile-text'><p>Jofy Space</p></div>" +
            "<div class = 'list-box'><img class = 'mobile-list-img' src = 'img/list.png'/></div>" +
        "</div>"
        );
    $("header").html(
    "<div class ='logo-wrap'>" + 
        "<div class = 'logo logo-text'><img class = 'logo logo-img' src = 'img/logo_word.png'/></div>" + 
    "</div>");

    navListHtml = navListHtml + "<ul class = 'group'>"
    for (var list in navList) {
        console.log(navList[list]);
        navListHtml = navListHtml + "<li class = '" + navList[list] + "'><a id = '" + navList[list] + "' href = '" + navHypList[list]+ "'>" + navList[list] + "</a></li>";
    }

    navListHtml = navListHtml + "</ul><div class='social-wrap'><div class='nav-social'></div></div>";
    $(".header-nav").html(navListHtml);

    $(".nav-social").html(
    '<ul class = "iconUl">' + 
    '<li><img src = "img/instagram.svg"></li>' +
    '<li><img src = "img/facebook.svg"></li>' +
    '<li><img src = "img/youtube.svg"></li>' +
    '</ul');


    $(".list-box").click(function(){
        $(".sidebar-content").show();
    });
});
