$(document).ready(function(){
    var voiceController = document.getElementById("index-video");
    $(".sound-button").click(function(){
        if (voiceController.muted == false) {
            $('.sound-button-img').attr('src','img/speaker_no.png');
            voiceController.muted = true;
        }
        else {
            $('.sound-button-img').attr('src','img/speaker_yes.png');
            voiceController.muted = false;
        }
    })
})