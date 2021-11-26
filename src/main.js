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
}

// document.addEventListener('DOMContentLoaded', function() {
 
//     window.addEventListener('scroll', stickyBar);
  
//     // window.onscroll = function() {stickyBar()};
//     var navbar = document.getElementById("navbar");
//     var sticky = navbar.offsetTop;

//     function stickyBar() {
//         if (window.pageYOffset >= sticky) {
//             navbar.classList.add("sticky");
//         }
//         else 
//         {
//             navbar.classList.remove("sticky");
//         }
//     }
// })
