 $("#msg").val("");
var userModel = "<div class='row'><div class='col-sm-4 pull-right chat-box  animated slideInRight'><span class='pull-right user'>";
var userModelEnd = "</span></div></div>";
var botModal = "<div class='row'><div class='col-sm-4 chat-box  animated slideInLeft'><span class='bot'>";
var botModalEnd = "</span></div></div>"
var botMessage = function(){
    var msg="hello";
    var bmodal = botModal + msg + botModalEnd;
    $("#chat").append(bmodal);
}
var sendMessage = function(){
    var msg = $("#msg").val();
    if((msg != "")&&(msg != null)){
        var umodal = userModel + msg + userModelEnd;
        $("#chat").append(umodal);
        $("#msg").val("");
        setTimeout(function(){
            botMessage();
        },1000)
    }
}
