$('.slider__content').slick({
    asNavFor: '.timeline',
    slidesToShow: 1,
    arrows:false
});

$('.timeline__block').slick({
    asNavFor: '.slider__content',
    slidesToShow: 3,
    centerMode: true,
    focusOnSelect: true
});