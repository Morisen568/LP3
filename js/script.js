$(window).on('load',function(){
  $("#splash-logo").delay(1500).fadeOut('slow');

    $("#splash").delay(1500).fadeOut('slow',function(){
  $('body').addClass('appear');
    });
    $('.splashbg').on('animationend', function() {
    });
});


$(function(){
  $('.accordion-label').click(function(){
    $(this).siblings('.accordion-box').slideToggle();
    $('.accordion-label').not($(this)).siblings('.accordion-box').slideUp();
  });
});

function fadeIn() {

    $('.fadeUpTrigger').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + -100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight) {
        $(this).addClass('fadeUp');
      } else {
        $(this).removeClass('fadeUp');
      }
    });

    $('.fadeLeftTrigger').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight) {
        $(this).addClass('fadeLeft');
      } else {
        $(this).removeClass('fadeLeft');
      }
    });

    $('.fadeRightTrigger').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight) {
        $(this).addClass('fadeRight');
      } else {
        $(this).removeClass('fadeRight');
      }
    });
}


  $(window).scroll(function () {
    fadeIn();
  });



  function fadeIn1() {

    $('.rollAnime1').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight) {
        $(this).addClass('fadeRoll');
      } else {
        $(this).removeClass('fadeRoll');
      }
    });
  }

  $(window).scroll(function () {
    fadeIn1();
  });

  $('#js-nav a').on('click', function () {
  let hrefElement = $(this).attr('href');
  let headerHeight = $('#header').outerHeight(true);
  let position = $(hrefElement).offset().top - headerHeight;
  $('body,html').animate({
    scrollTop: position
  }, 500);
  return false;
});


  window.onunload = function () { };

  function sizecheck() {
    w = window.innerWidth ? window.innerWidth : $(window).width();
    h = window.innerHeight ? window.innerHeight : $(window).height();
  }

  sizecheck();
  $(function () {
    if (w > 769) {
    } else {
      $("header .drawer").click(function () {
        $('body').toggleClass('nav-open');
        $('header nav').fadeToggle(200);
      });

      $("header li a").click(function () {
        $('body').toggleClass('nav-open');
        $('header nav').fadeToggle(200);
      });
    }
  });

