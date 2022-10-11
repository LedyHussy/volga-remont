///lite-scroll

$(document).ready(function() {
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e) {
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop: $(d).offset().top - 100
        }, t);
    });
});

///mask-phone

jQuery(function($) {
    $(".phone-mask").mask("+7 (999) 999-99-99");
});

/// menu
$('.nav_toggle').click(function () {
    $('.nav_mobile').slideToggle('slow');
    $(this).toggleClass('active');
})
