$(document).ready(function() {
    $('.hamburger-menu').click(function() {
        $('.navigation').toggleClass('change');
    });


    lightbox.option({
        'wrapAround': true
      });

      $(window).scroll(function() {
        let position = $(this).scrollTop();

        if(position >= 350) {
            $('.gallery').addClass('change');
        } else {
            $('.gallery').removeClass('change');
        }

      });

      $('.writers-accordion').click(function(event) {

        if(event.target.id.split('-')[0] === 'button') {
           $('#book-1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
           $('#book-2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
        }

      });
      $('#librarys').click(function(){
$('.navigation').removeClass('change');
$('#myNavbar').removeClass('show');
});
$('#writerss').click(function(){
$('.navigation').removeClass('change');
$('#myNavbar').removeClass('show');
});
$('#librarys').click(function(){
$('.navigation').removeClass('change');
$('#myNavbar').removeClass('show');
});
$('#books').click(function(){
$('.navigation').removeClass('change');
$('#myNavbar').removeClass('show');
});
$('#contacts').click(function(){
$('.navigation').removeClass('change');
$('#myNavbar').removeClass('show');
});
});
