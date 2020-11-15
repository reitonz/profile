$(function() {
  $('.fade-in').fadeIn(2000);
  $('#arrow').fadeIn(2000);
  setTimeout('arrow()');

  $('a[href^="#"]').click(function() {
    var speed = 600;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
 });

 $('.slider').slick({
  dots:true,
    focusOnSelect: true,
    slidesToShow:3,
    slidesToScroll:1,
    centerMode: true,
    centerPadding: '50px',
});

$(window).scroll(function() {
  let top = $(this).scrollTop();
  if(top > 400) {
    $(".nav").fadeIn('800');
  } else {
    $('.nav').fadeOut('800');
  }

  if(top > 500) {
    $("#about").fadeIn(1000);
  }

  if(top > 1000) {
    $("#skill").fadeIn(1000);
  }

  if(top > 1000) {
    $('.html').fadeIn(1200);
    $('.css').fadeIn(1700);
    $('.js').fadeIn(2300);
    $('.scss').fadeIn(2800);
    $('.php').fadeIn(3200);
    $('.word').fadeIn(3700);

  }

  if(top > 1500) {
    $("#work").fadeIn(1000);
    $('#per').css('padding-top', '0');
  }


});

});

function arrow() {
  $('#arrow').animate({
    opacity: ".3"
  },1000).animate({
    opacity: "1"
  },1000);
  setTimeout("arrow()", 3000);
}

let title = document.getElementById('title');

title.addEventListener('click', function() {
  alert(Date());
});
