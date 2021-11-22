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
