/**
 * Created by Alex on 21/08/2015.
 */
(function ($) {
    //jQuery to collapse the navbar on scroll and make it transparent/opaque
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            $('.navbar-default').css({"background": "white"});
            $('.navbar .nav > li > a, .navbar-default .navbar-brand').css({color: 'black'})
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            $('.navbar-default').css({"background": "transparent"});
            $('.navbar .nav > li > a, .navbar-default .navbar-brand').css({color: 'white'})
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

})(jQuery);