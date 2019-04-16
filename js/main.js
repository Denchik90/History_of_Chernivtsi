
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
    infinite: false

});
$('.timeline__block button').text('');
