;(function($){
    $(document).on('ready', function(){
        
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
        $(window).scroll(function () {
            if($(window).scrollTop() > 300) {
                $(".mainmenu-area").addClass('sticky');
            } else {
                $(".mainmenu-area").removeClass('sticky');
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
            effect: 'coverflow',
            direction: 'vertical',
            loop: false,
            speed: 800,
            spaceBetween: 0,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: -5,
              stretch: 260,
              depth: 100,
              modifier: 1,
              slideShadows: false
            },
            freeMode:false,
            freeModeSticky:true
        });
        

        /*====== Product-Slider ======*/
        var Product_Slider = new Swiper(".product-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 0,
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