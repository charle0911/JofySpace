////////////////////////////////////////////////////////
//Update Data: 20180311
//Owner: Dick
////////////////////////////////////////////////////////
//activityList from ../test_data/get_activity.json
var activityList = [
{
	category: "攝影",
    id: "test1",
    image: "img/active_1.jpg",
    title: "2018台北101國際攝影大賽",
    content: "迎接即將到來的2017年，從聖誕一直到跨年，期間有不少好玩有趣的活動等著大家。最重要的，還是今年最後一天的跨年晚會、跨年煙火、元旦曙光！想知道全台灣各縣市鄉鎮有辦哪些活動嗎？多達53個活動任君選擇喔！",
    startDate: "2017-10-31",
	endData: "2018-03-15",
    video: "E"
},
{
	category: "自然",
    id: "test2",
    image: "img/active_2.jpg",
    title: "2017關渡國際自然藝術季 ",
    content: "迎接即將到來的2017年，從聖誕一直到跨年，期間有不少好玩有趣的活動等著大家。最重要的，還是今年最後一天的跨年晚會、跨年煙火、元旦曙光！想知道全台灣各縣市鄉鎮有辦哪些活動嗎？多達53個活動任君選擇喔！",
    startDate: "2017-10-01",
	endData: "2017-12-31",
    video: "E"
}
];
////////////////////////////////////////////////////////
//Global variable
var activityListHtml = "";
var formData={};
////////////////////////////////////////////////////////
//Document function
////////////////////////////////////////////////////////
$(document).ready(function(){

    var selectBoxController = $("#search-bar");
    showList();    

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
/////////////////////////////////////////////////////////////
//Gloabal function
/////////////////////////////////////////////////////////////
//show List
function showList(){
	doAjax(formData, "GET");
	
	//TODO: insert button for manager to add the activity
	for ( var active in activityList) {
        console.log(activityList[active]);
        console.log(activityList[active].image);
        activityListHtml = activityListHtml +
        '<a class = "js-editable-target editable project-cover js-project-cover-touch hold-space" onclick="popupform('+activityList[active].id+')">' + 
        '<div class = "cover-image-wrap">' +
        '<div class = "cover-image"   style = "background-image : url(\'' + activityList[active].image + '\');"></div>' +
        '</div>' +
        '<div class = "details-wrap"><div class = "details-inner">' + 
            '<div class = "first-show">' + 
                '<div class = "title">' + activityList[active].title + '</div>' +
                '<div class = "date">' + activityList[active].startDate + '~' + activityList[active].endDate + '</div>' + 
            '</div>' + 
            '<div class = "content">' + activityList[active].content + '</div>' + 
        '</div></div></a>';
    }
	$("#activityList").html(activityListHtml);
}
//popup form for manager to modify activity
function popupForm(id){
	//TODO: apply formData.activityList to activityListHtml
}
//preview List
function previewList(){
	//TODO: apply formData.activityList to activityListHtml
}
//submit event function when the manager filled up the form 
function modifyList(){
	//TODO: submit formData to server
}
// formData: the data from/to server, action: GET/POST 
function doAjax(formData, action){
	//TODO: doAjax callback function form showList/modifyList
}