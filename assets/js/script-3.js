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

        $('a').on('click',function(){
            var href = $(this).attr('href');
            if(href == '#'){
                
            }
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


        /*====== Testimonial-Slider ======*/
        var Testimonial_Slider = new Swiper(".testimonial-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 58,
            slidesPerView: 2,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".testimonial-slider .arrow_next",
                prevEl: ".testimonial-slider .arrow_prev",
            },
            pagination: {
                el: ".testimonial-slider .slider-custom-pagination",
                clickable: true,
            },
            breakpoints: {
                780: {
                    slidesPerView: 1,
                },
            },
        });
        

        /*====== Product-Slider ======*/
        var Product_Slider = new Swiper(".product-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 32,
            slidesPerView: 4,
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
                    slidesPerView: 1,
                },
                900: {
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