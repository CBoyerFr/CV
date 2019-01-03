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