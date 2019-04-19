$(document).ready(function () {
    $('.slider__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.timeline__block',
        infinite: false
    });
    $('.timeline__block').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider__content',
        centerMode: true,
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 450,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.timeline__block button').text(' ');

    $('img').on('click', function () {
        let img = $(this).attr('data-img');
       if(typeof img !== typeof undefined && img !== false){
            $('.modal').fadeIn();
            $('.modal img').attr('src', img);
       }else {
           console.log("no")
       }
    });
    $('.modal span').bind('click',function () {
        $('.modal').fadeOut()
    });
    $('.menu__btn').bind('click',function () {
        $('#menu').toggleClass('menu-active');
        $('.content').toggleClass('content-active');
    });
    // beforeafter
    let isMouseDown = false;
    $('.galery__comparing').mousedown(function () {
           isMouseDown = true;
    });
    $('.galery__comparing').mouseup(function () {
           isMouseDown = false
    });
    $('.galery__comparing').mousemove(function (e) {
        e.preventDefault();
        let x = e.offsetX;
        if(isMouseDown) {
            console.log(x);
            $(this).children('.galery__img-second').css('width', x + 'px');
        }
    });
    // beforeafter

    let width = $(window).width();
   if (width < 600){
       $('.menu__btn').bind('click',function () {
            $(this).toggleClass('menu__btn-active')
       });
   }
});
