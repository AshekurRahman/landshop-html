;(function($){
    $(document).on('ready', function(){
        /* Nav-Widget-Toggle */
        $('.nav-actions .widget-toggle').on('click', function(){
            $('body').toggleClass('nav-products-active');
            $(this).toggleClass('active');
            return false;
        });
        /* Nav-Mobile-Toggle */
        $('.nav-actions .mobile-menu-toggle').on('click', function(){
            $('.nav-actions .search-toggle').removeClass('active');
            $('body').removeClass('nav-search-active');
            $('body').toggleClass('mobile-menu-active');
            $(this).toggleClass('active');
            return false;
        });        
        /* -- Submenu-Plus-Icon-Add --*/
        $('.mainmenu-area .menu-items li ul.mega-menu').each(function(){
            $(this).parent('li').addClass('have-megamenu');
        });
        $('.mainmenu-area .menu-items li ul').each(function(){
            $(this).parent('li').addClass('have-submenu');
            $(this).parent('li').append('<span class="plus"></span>');
            $(this).parent('li').find('.plus').on('click', function(){
                $(this).parent('li').toggleClass('clicked');
            });
        });        
        /* Sticky-Menu-JS */
        $(window).scroll(function () {
            if($(window).scrollTop() > 300) {
                $(".mainmenu-area").addClass('sticky');
            } else {
                $(".mainmenu-area").removeClass('sticky');
            }
        });
        /* Search-Toggle */
        $('.nav-actions .search-toggle').on('click', function(){
            $('.nav-actions .mobile-menu-toggle').removeClass('active');
            $('body').removeClass('mobile-menu-active');
            $('body').toggleClass('nav-search-active');
            $(this).toggleClass('active');
            return false;
        });
        /* Color-Switch-Background-Set */
        $('.color-switch-options .switch').each(function(){
            var color = $(this).data('color');
            if(color != null){
                $(this).css('background-color',color);
            }
        });        
        $('.color-switch-options .switch').on('click',function(){
            var color = $(this).data('color');
            if(color != null){
                $('.header-text .product-image, .header-image .background').css('background-color',color);
            }
        });  
        /* Accordion-JS */
        $('.accordion').find('.item .title.active').siblings('.desc').slideDown();
        $('.accordion').find('.item .title').on('click', function () {
            var siblingsItem = $(this).parent('.item').siblings('.item');
            siblingsItem.find('.desc').slideUp();
            siblingsItem.find('.title').removeClass('active');
            $(this).siblings('.desc').slideToggle();
            $(this).toggleClass('active');
        });
        /* Toggle-menu-JS */        
        $('.mainmenu-area .nav-row .nav-actions .nav-action.toggle-menu').on('click',function(){
            $(this).find('span').toggleClass('ls-toggle-bar');
            $(this).find('span').toggleClass('ls-close-square');
            $('.mainmenu-area .nav-row .menu-items').slideToggle();
        });
        /* Sticky-Menu-JS */
        $('.page-wrapper').scroll(function () {
            if($('.page-wrapper').scrollTop() > 120) {
                $("body").addClass('sticky-menu');
            } else {
                $("body").removeClass('sticky-menu');
            }
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

        /*====== Header_Slider_Pagination ======*/
        var Header_Slider_Pagination = new Swiper("#header-slider-pagination", {
            loop: true,
            direction: 'vertical',
            speed: 1000,
            spaceBetween: 40,
            slidesPerView: 3,
            freeMode: true,
            breakpoints: {
                780: {
                    slidesPerView: 3,
                },
            },
        });


        /*====== Header-Slider ======*/
        var Header_slider = new Swiper(".header-slider", {
            effect: 'fade',
            loop: true,
            speed: 1000,
            spaceBetween: 58,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            thumbs: {
              swiper: Header_Slider_Pagination,
            },
        });
        
        
        /*====== Client-Logo-Slider ======*/
        var Client_Logo_Slider = new Swiper("#client-logo-slider", {
            loop: true,
            speed: 1000,
            spaceBetween: 30,
            slidesPerView: 2,
            watchSlidesVisibility: true,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                580: {
                    slidesPerView: 3,
                },
                780: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                },
                992: {
                    slidesPerView: 5,
                },
                1200: {
                    slidesPerView: 6,
                },
            },
        });
        /*====== Product-Slider ======*/
        var Product_Slider = new Swiper(".product-slider", {
            loop: true,
            speed: 1000,
            spaceBetween: 32,
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
                900: {
                    slidesPerView: 3,
                },
                1250: {
                    slidesPerView: 4,
                },
            },
        });
        
        /*====== Testimonial-Slider ======*/
        var Testimonial_Slider = new Swiper(".testimonial-slider", {
            loop: true,
            speed: 1000,
            spaceBetween: 0,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                992: {
                    slidesPerView: 2,
                },
                1250: {
                    slidesPerView: 3,
                },
            },
        });




        
        /*-- Mail-Chimp Integration--*/
        $('#subscribe-form').ajaxChimp({
            url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
            callback: function (resp) {
                if (resp.result === 'success') {
                    $('#subscribe-form .form-group').fadeOut();
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