;(function($){
    $(document).on('ready', function(){

        /* Toggle-menu-JS */        
        $('.mainmenu-area .nav-row .nav-actions .nav-action.toggle-menu').on('click',function(){
            $(this).find('span').toggleClass('ls-toggle-bar');
            $(this).find('span').toggleClass('ls-close-square');
            $('.mainmenu-area .nav-row .menu-items').slideToggle();
        });

        /* Sticky-Menu-JS */
        $(window).scroll(function () {
            if($(window).scrollTop() > 300) {
                $(".mainmenu-area").addClass('sticky');
            } else {
                $(".mainmenu-area").removeClass('sticky');
            }
        });

        /* -- Submenu-Plus-Icon-Add --*/
        $('.mainmenu-area .menu-items li ul').each(function(){
            var subMenuThis = $(this);
            $(this).siblings('a').append('<span class="plus"></span>');
            $(this).siblings('a').find('.plus').on('click', function(){
                $(this).parents('a').parents('li').toggleClass('clicked');
            });
        });

        
        /*===== SCROLL REVEAL ANIMATION =====*/
        const sr = ScrollReveal({
            distance: '60px',
            duration: 2800,
            // reset: true,
        });
        sr.reveal(`.anim_top`, {
            origin: 'top',
            interval: 100,
        });
        sr.reveal(`.anim_bottom`, {
            origin: 'bottom',
            interval: 100,
        });
        sr.reveal(`.anim_left`, {
            origin: 'left',
        });
        sr.reveal(`.anim_right`, {
            origin: 'right',
            interval: 100,
        });


        /*====== Testimonial-Slider ======*/
        var Testimonial_Slider = new Swiper(".testimonial-slider", {
            loop: true,
            speed: 1000,
            spaceBetween: 0,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: "#testimonial-slider-control .navigation-control .next",
                prevEl: "#testimonial-slider-control .navigation-control .prev",
            },
            pagination: {
                el: "#testimonial-slider-control .pagination-control",
                clickable: true,
            },
        });


        

        /*====== Product-Slider ======*/
        var Product_Slider = new Swiper(".product-slider", {
            loop: true,
            speed: 1000,
            spaceBetween: 0,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,            
            navigation: {
                nextEl: "#product-slider-control .navigation-control .next",
                prevEl: "#product-slider-control .navigation-control .prev",
            },
            pagination: {
                el: "#product-slider-control .pagination-control",
                clickable: true,
            },
            breakpoints: {
                575: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1250: {
                    slidesPerView: 4,
                },
            },
        });

        
        /*-- Mail-Chimp Integration--*/
        $('#subscribe-form').ajaxChimp({
            url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
            callback: function (resp) {
                if (resp.result === 'success') {
                    $('.subscribe-form input[type="email"], .subscribe-form button[type="submit"]').fadeOut();
                }
            }
        });




    });


    /*------------- preloader js --------------*/
    var startTime = performance.now();
    var count=0;
    var counter= setInterval(function() {
        if(count<101){
        $('.preloader .count').text(count+'%');
        $('.preloader .load').css('width', count+'%');
        count++; 
        }else {
        $('.preloader').fadeOut();
        clearInterval(counter);
        }
    }, Math.floor(startTime/100));

    $(window).on('load', function(){
        $('.preloader').fadeOut();
    });


})(jQuery);