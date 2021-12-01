var cursor = true;
var speed = 500;

//Used to create a blinking cursor effect
setInterval(() => {
    if(cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
    }
    else
    {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
    }
}, speed);

//Validates the contact information actually is entered
function validate() {
    var name = document.forms["contactMe"]["name"];
    var msg = document.forms["contactMe"]["message"];

    //If name is empty
    if (name.value == "") {
        document.getElementById('errorname').innerHTML="Enter a valid name";
        return false;
    } else {
        document.getElementById('errorname').innerHTML="";
    }

    //If message is empty
    if (msg.value == "") {
        document.getElementById('errormsg').innerHTML="Please enter a message to send";
        return false;
    } else {
        document.getElementById('errormsg').innerHTML="";
    }

    document.getElementById('content').innerHTML="";
    document.getElementById('content').innerHTML="<span style='font-size:40px; color: red'>Form Successfully Submitted! \n Now returning you to webpage </span>";
    
    setTimeout(function() {
        window.location.reload();
    }, 3000);

};

//Used to show and hide extra details in work category
$(document).ready(function () {
    $(".work-experience .expand").click(function () {
        $(".work-experience .expand").css("display", "none");
        $(".work-experience .detract").css("display", "block");
        $(".work-experience .more_details").css("display", "block");
    });

    $(".work-experience .detract").click(function () {
        $(".work-experience .expand").css("display", "block");
        $(".work-experience .detract").css("display", "none");
        $(".work-experience .more_details").css("display", "none");
    });

    $(".work-experience .expand2").click(function () {
        $(".work-experience .expand2").css("display", "none");
        $(".work-experience .detract2").css("display", "block");
        $(".work-experience .more_details2").css("display", "block");
    });

    $(".work-experience .detract2").click(function () {
        $(".work-experience .expand2").css("display", "block");
        $(".work-experience .detract2").css("display", "none");
        $(".work-experience .more_details2").css("display", "none");
    });

});


//Custom Colors and settings popup window
window.onload = function(){
var settings_modal = document.getElementById("settings_panel");
var btn = document.getElementById("settings_btn");
var span = document.getElementsByClassName("close")[0];

var b_header = document.getElementById("h_blue");
var w_header = document.getElementById("h_white");
var g_header = document.getElementById("h_green");
var w_text = document.getElementById("t_white");
var g_text = document.getElementById("t_green");
var g_background = document.getElementById("b_grey");
var b_background = document.getElementById("b_blue");
var blk_background = document.getElementById("b_black");
var h1Element = document.getElementsByTagName("h1");
var h2Element = document.getElementsByTagName("h2");
var h3Element = document.getElementsByTagName("h3");
var bodyElement = document.getElementsByTagName("body");

    b_header.onclick = function(){
        console.log("Setting Header Color to: BLUE");
        for(var i = 0; i < h1Element.length; ++i){
            h1Element[i].style.color = "blue";
        }
        for(var i = 0; i < h2Element.length; ++i){
            h2Element[i].style.color = "blue";
        }
        for(var i = 0; i < h3Element.length; ++i){
            h3Element[i].style.color = "blue";
        }
    }

    g_header.onclick = function(){
        console.log("Setting Header Color to: GREEN");
        for(var i = 0; i < h1Element.length; ++i){
            h1Element[i].style.color = "#1eff3c";
        }
        for(var i = 0; i < h2Element.length; ++i){
            h2Element[i].style.color = "#1eff3c";
        }
        for(var i = 0; i < h3Element.length; ++i){
            h3Element[i].style.color = "#1eff3c";
        }
    }

    w_header.onclick = function() {
        console.log("Setting Header Color to: WHITE");    
        for(var i = 0; i < h1Element.length; ++i){
            h1Element[i].style.color = "white";
        }
        for(var i = 0; i < h2Element.length; ++i){
            h2Element[i].style.color = "white";
        }
        for(var i = 0; i < h3Element.length; ++i){
            h3Element[i].style.color = "white";
        }
    }

    g_text.onclick = function() {
        console.log("Setting Text Color to: GREEN");
        for(var i = 0; i < bodyElement.length; ++i){
            bodyElement[i].style.color = "#1eff3c";
        }
    }
    w_text.onclick = function() {
        console.log("Setting Text Color to: WHITE");
        for(var i = 0; i < bodyElement.length; ++i){
            bodyElement[i].style.color = "white";
        }
    }

    g_background.onclick = function() {
        console.log("Setting CRT Color to: GREY");
        document.getElementById("crt_frame").style.backgroundColor= "#3d3d3d";
    }
    b_background.onclick = function() {
        console.log("Setting CRT Color to: BLUE");
        document.getElementById("crt_frame").style.backgroundColor = "#0057bb";
    }
    blk_background.onclick = function() {
        console.log("Setting CRT Color to: BLACK");
        document.getElementById("crt_frame").style.backgroundColor = "black";
    }
    
    btn.onclick = function() {
        settings_modal.style.display = "block";
    }

    span.onclick = function() {
        settings_modal.style.display = "none";
    }

    window.onclick = function(event) {
        if ( event.target == settings_modal) {
            settings_modal.style.display = "none";
        }
    }
}