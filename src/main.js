var cursor = true;
var speed = 500;

// var $window = $(window);
// var $body = $('body');
// var $contentWrapper = $('content_wrapper');
// var $container = $('#container');
// var minHeaderHeight = 250;

// var lastWindowHeight = $window.height();

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

// checkScroll();
// stickyTop();

// $window.resize(function() {
//     checkScroll();
//     stickyTop();
// });

// $window.scroll(function() {
//     stickyTop();
// });

// function checkScroll() {
//     var newWindowHeight = $window.height();
//     var diff = newWindowHeight - lastWindowHeight;
//     lastWindowHeight = newWindowHeight;

//     var containerHeight = $container.height();
//     $contentWrapper.height(containerHeight);
//     $body.height(newWindowHeight + containerHeight);

//     var windowScrollTop = $window.scrollTop();
//     if(windowScrollTop > 0) {
//         $window.scrollTop(windowScrollTop + windowHeightDiff);
//     }
// }

// function stickyTop() {
//     var windowScrollTop = $window.scrollTop();
//     var maxScroll = ($window.height() - minHeaderHeight);
//     if (windowScrollTop >= maxScroll) {
//         $contentWrapper.css('position', 'fixed').css('top', minHeaderHeight); // stop wrapper top at bottom of header
//     } else {
//         $contentWrapper.css('position', 'absolute').css('top', ''); // allow regular scrolling
//     }
    
//     if ($contentWrapper.css('position') === 'fixed') {       // if wrapper is fixed,
//         $container.css('top', -(windowScrollTop - maxScroll)); // continue scrolling by shifting content up
//     } else {
//         $container.css('top', 0); // make sure content is lined up with wrapper
//     }
// }


