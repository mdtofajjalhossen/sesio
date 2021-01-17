;
(function ($) {
    "use strict";

    function menu_fixed() {
        var menusfixed = $('.sesio_header');

        function menu_scroll_fixed(e) {
            var windowTop = $(window).scrollTop();
            var adRecl = "fixedMenu";
            if (windowTop > 0) {
                e.addClass(adRecl);
            } else {
                e.removeClass(adRecl);
            }
        }
        menu_scroll_fixed(menusfixed);

        $(window).scroll(function () {
            menu_scroll_fixed(menusfixed);
        });
    }
    menu_fixed();

    /*-------------------------------------------------------------------------------
        Dropdown Menu
    -------------------------------------------------------------------------------*/
    // function active_dropdown() {
    //     if ($(window).width() < 992) {
    //         $('.Appily_header_menu ul li.nav-item > a.dropdown-toggle').on('click', function (event) {
    //             event.preventDefault();
    //             $(this).parent().find('.dropdown-menu').first().toggle(500);
    //             $(this).parent().siblings().find('.dropdown-menu').hide(500);
    //         });
    //     }
    // }
    // active_dropdown();

    /*-------------------------------------------------------------------------------
       appscreenshot slider
    -------------------------------------------------------------------------------*/
    function Appscreenshot() {
        $('.testimonial_slider').slick({
            slidesToShow: 3,
                slidesToScroll: 1,
                speed: 2000,
                arrows: false,
                dots: true,
                // autoplay: true,
                infinite: true,
                centerMode: true,
                centerPadding: '0px',
                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
            
          });
    }
    Appscreenshot();


    /*-------------------------------------------------------------------------------
        dropdown menu smooth
    -------------------------------------------------------------------------------*/
    // function drop_down() {
    //     $(".dropdown-menu .dropdown-item").on("click", function () {
    //         $(".dropdown-menu .dropdown-item").removeClass("active");
    //         $(this).addClass("active");
    //     });
    // }
    // drop_down();

    $('.grid').imagesLoaded( function() {
        // init Isotope
        var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        horizontalOrder: true,
        masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 0,
        gutter: 0
        }
        });
        // filter items on button click
        $('.portfolio_menu').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        });
        });
        
        //for menu active class
        $('.portfolio_menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
        });


    // $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
    // $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    // $('body').delay(350).css({'overflow':'visible'});

    // $(".preloader-wrap").delay(1500).fadeOut('slow');


})(jQuery);
