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
        
        /* Toggle-menu-JS */        
        $('.mainmenu-area .nav-row .nav-actions .nav-action.toggle-menu').on('click',function(){
            $(this).find('span').toggleClass('ls-toggle-bar');
            $(this).find('span').toggleClass('ls-close-square');
            $('.mainmenu-area .nav-row .menu-items').slideToggle();
        });


        /* Sticky-Menu-JS */
        $('body').scroll(function () {
            if($('body').scrollTop() > 120) {
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
        var Testimonial_Slider_Menu = [
            '<img src="assets/images/theme-5/client-1.png" alt="">',
            '<img src="assets/images/theme-5/client-2.png" alt="">',
            '<img src="assets/images/theme-5/client-3.png" alt="">',
            '<img src="assets/images/theme-5/client-4.png" alt="">',
            '<img src="assets/images/theme-5/client-5.png" alt="">',
            '<img src="assets/images/theme-5/client-6.png" alt="">',
            '<img src="assets/images/theme-5/client-7.png" alt="">'
        ];
        var Testimonial_Slider_1 = new Swiper(".testimonial-content-slide", {
            loop: true,
            speed: 1000,
            spaceBetween: 30,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".testimonial-navigation .next",
                prevEl: ".testimonial-navigation .prev",
            },
            pagination: {
                el: '#testimonial_slider_pagination',
                bulletClass: 'bullet',
                bulletActiveClass: 'active',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="'+ (index == 1 ? `carousel_mid_item` : `carousel__item`) + ' ' + className + '">' + (Testimonial_Slider_Menu[index]) + '</span>';
                }
              },
            breakpoints: {
                780: {
                    slidesPerView: 1,
                },
            },
            thumbs: {
              swiper: Testimonial_Slider_1,
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
        $('.carousel').each(function(){ 
            var lomba = $(this).outerWidth(),
            delay = 0,
            item = $(this).find('.carousel__item').length,
            step = 20 / item; /* 5 is the animation duration */
            $(this).css('height', lomba+'px');
            $(this).find('.carousel__item').each(function() {
                var lomba = $(this).outerWidth();
                let rand = Math.floor((Math.random() * 40) + 5);
                $(this).css('width', lomba+rand+'px');
                $(this).css('height', lomba+rand+'px');
                $(this).css('animation-delay', -delay + "s");
                delay += step;
            });
        });
    });


})(jQuery);