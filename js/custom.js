$(function() {
    "use strict"

    jQuery(document).ready(function($) {


      // Preloader js    
         $(window).on('load', function(){
             $('.preloader').delay(1500).fadeOut(500);
             
         })

        $('.portfolio-carousel').owlCarousel({

            autoPlay: false,
            margin: 30,
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                480: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


        /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("header").style.top = "0";
            } else {
                document.getElementById("header").style.top = "-110px";
            }
            prevScrollpos = currentScrollPos;
        }




        var htmlBody = $('html, body');
        //    //nave top js
        var navNavbar = $('div.main-menu'),
            $window = $(window),
            navOffset = navNavbar.offset().top;

        //animation scroll js
        $('a[href*="#"]:not([href="#').on('click', function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    htmlBody.animate({
                        scrollTop: target.offset().top - 0
                    }, 1200);
                    return false;
                }
            }
        });

        // wow js install
        new WOW().init();

    });

    jQuery(window).load(function() {



    });


});

function onFun() {
    var teen = document.getElementById("hamburger-menu").style.visibility = "visible";
}
function offFun() {
    var nine = document.getElementById("hamburger-menu").style.visibility = "hidden";
}