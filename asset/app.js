$(window).ready(function () {
    "use strict"; // Start of use strict

    /** Loader */
    var loader = $('.loader');
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var i = 0;
    /*Center loader on half screen */
    loader.css({
        top: wHeight / 2 - 2.5,
        left: wWidth / 2 - 200
    })
    do {
        loader.animate({
            width: i
        }, 10)
        i += 3;
    } while (i <= 400)
    if (i === 402) {
        loader.animate({
            left: 0,
            width: '100%'
        })
        loader.animate({
            top: '0',
            height: '100vh'
        })
    }
    /* This line hide loader and show content */
    setTimeout(function () {
        $('.loader-wrapper').fadeOut("fast");
        (loader).fadeOut("fast");
        /*Set time in milisec */
    }, 3000);
});

$(document).ready(function () {

    // Navbar 
    $(".nav-item").click(function hideNavbar() {
        var x = window.matchMedia("(max-width: 768px)")
        x.addListener(hideNavbar)
        if (x.matches) {
            $(".navbar-toggler").click();
        }
    });


});
