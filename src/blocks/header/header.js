$(window).scroll(function(){
    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('header__sticky');
    }
    else {
        $('.header').removeClass('header__sticky');
    }
});