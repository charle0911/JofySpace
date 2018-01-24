var projectList = [
{
    id: "test1",
    img: "img/project_1.jpg",
    title: "9A",
    content: "迎接即將到來的2017年，從聖誕一直到跨年，期間有不少好玩有趣的活動等著大家。最重要的，還是今年最後一天的跨年晚會、跨年煙火、元旦曙光！想知道全台灣各縣市鄉鎮有辦哪些活動嗎？多達53個活動任君選擇喔！",
    date: "2017",
    video: "JwjBbWQs71k"
},
{
    id: "test2",
    img: "img/project_2.JPG",
    title: "16.17B ",
    content: "迎接即將到來的2017年，從聖誕一直到跨年，期間有不少好玩有趣的活動等著大家。最重要的，還是今年最後一天的跨年晚會、跨年煙火、元旦曙光！想知道全台灣各縣市鄉鎮有辦哪些活動嗎？多達53個活動任君選擇喔！",
    date: "2016",
    video: "JwjBbWQs71k"
},
{
    id: "test2",
    img: "img/project_3.JPG",
    title: "FASHION360 ",
    content: "迎接即將到來的2017年，從聖誕一直到跨年，期間有不少好玩有趣的活動等著大家。最重要的，還是今年最後一天的跨年晚會、跨年煙火、元旦曙光！想知道全台灣各縣市鄉鎮有辦哪些活動嗎？多達53個活動任君選擇喔！",
    date: "2015",
    video: "JwjBbWQs71k"
},
{
    id: "test2",
    img: "img/project_4.JPG",
    title: "BEARD TREE ",
    content: "迎接即將到來的2017年，從聖誕一直到跨年，期間有不少好玩有趣的活動等著大家。最重要的，還是今年最後一天的跨年晚會、跨年煙火、元旦曙光！想知道全台灣各縣市鄉鎮有辦哪些活動嗎？多達53個活動任君選擇喔！",
    date: "2014",
    video: "JwjBbWQs71k"
}
];

$(document).ready(function(){
    var projectListHtml = "";
    for ( var project in projectList) {
        console.log(projectList[project]);
        console.log(projectList[project].img);
        projectListHtml = projectListHtml +
        '<a class = "js-editable-target editable project-cover js-project-cover-touch hold-space" >' + 
            '<div class = "cover-content-container">' +
                '<div class = "cover-image-wrap">' +
                    '<div class = "cover-image" > '+
                        '<div class = "cover cover-normal" style = "background-image : url(\'' + projectList[project].img + '\');"></div>' +
                    '</div>'+ 
                '</div>' +
                '<div class = "details-wrap">' + 
                    '<div class = "details">' + 
                        '<div class = "details-inner">' + 
                            '<div class = "title">' + projectList[project].title + '</div>' +
                            '<div class = "date">' + projectList[project].date + '</div>' + 
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' + 
        '</a>';
    }
    
    $("#projectList").html(projectListHtml);
});

