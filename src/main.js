var cursor = true;
var speed = 500;


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