/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {
    $(function () {
        if ($("#portfolio-slider").length) {
            $("#portfolio-slider").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                animateOut: "fadeOut",
                smartSpeed: 2500,
                navText: [
                    "<img src='assets/img/arrow-left.svg' class='img-fluid' />",
                    "<img src='assets/img/arrow-right.svg' class='img-fluid' />",
                ],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    767: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    },
                },
            });
        }
    });

    // testimonial-slider
    $(function () {
        if ($("#testimonial-slider").length) {
            $("#testimonial-slider").owlCarousel({
                loop: true,
                center: true,
                items: 3,
                margin: 30,
                autoplay: true,
                nav: true,
                autoplayTimeout: 2500,
                animateOut: "fadeOut",
                smartSpeed: 2500,
                navText: [
                    "<img src='assets/img/arrow-left.svg' class='img-fluid' />",
                    "<img src='assets/img/arrow-right.svg' class='img-fluid' />",
                ],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    767: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    },
                },
            });
        }
    });
    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });

});
