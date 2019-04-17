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
        infinite: false
    });
    $('.timeline__block button').text('');

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
    })
});
