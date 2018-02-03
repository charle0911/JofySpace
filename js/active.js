var activeList = [
{
    id: "test1",
    img: "img/active_1.jpg",
    title: "2018台北101國際攝影大賽",
    content: "迎接即將到來的2017年，從聖誕一直到跨年，期間有不少好玩有趣的活動等著大家。最重要的，還是今年最後一天的跨年晚會、跨年煙火、元旦曙光！想知道全台灣各縣市鄉鎮有辦哪些活動嗎？多達53個活動任君選擇喔！",
    date: "2017-10-31~2018-03-15",
    video: "JwjBbWQs71k"
},
{
    id: "test2",
    img: "img/active_2.jpg",
    title: "2017關渡國際自然藝術季 ",
    content: "迎接即將到來的2017年，從聖誕一直到跨年，期間有不少好玩有趣的活動等著大家。最重要的，還是今年最後一天的跨年晚會、跨年煙火、元旦曙光！想知道全台灣各縣市鄉鎮有辦哪些活動嗎？多達53個活動任君選擇喔！",
    date: "2017-10-01~2017-12-31",
    video: "JwjBbWQs71k"
}
];



$(document).ready(function(){
    var activeListHtml = "";
    var selectBoxController = $("#search-bar");
    for ( var active in activeList) {
        console.log(activeList[active]);
        console.log(activeList[active].img);
        activeListHtml = activeListHtml +
        '<a class = "js-editable-target editable project-cover js-project-cover-touch hold-space" >' + 
        '<div class = "cover-image-wrap">' +
        '<div class = "cover-image"   style = "background-image : url(\'' + activeList[active].img + '\');"></div>' +
        '</div>' +
        '<div class = "details-wrap"><div class = "details-inner">' + 
            '<div class = "first-show">' + 
                '<div class = "title">' + activeList[active].title + '</div>' +
                '<div class = "date">' + activeList[active].date + '</div>' + 
            '</div>' + 
            '<div class = "content">' + activeList[active].content + '</div>' + 
        '</div></div></a>';
    }
    
    $("#activeList").html(activeListHtml);

    $("#search-button").click(function(){
        if (selectBoxController.hasClass("search-bar-show")) {
            $(".search-bar-wapper").hide();
            selectBoxController.removeClass("search-bar-show");
        }
        else {
            $(".search-bar-wapper").show();
            selectBoxController.addClass("search-bar-show");
        }
    });
});

