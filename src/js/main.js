
// изменеие колличества в поле по кнопкам плюс минус
function Quan() {
  $('.quantity-wrap .minus').click(function() {
    var input=$(this).parent().find('input.quan');
    var quantity=parseInt(input.val());
    if(quantity<=1)
    return;
    input.val(quantity-1);
    input.trigger('change');
  });
  $('.quantity-wrap .plus').click(function() {
    var input=$(this).parent().find('input.quan');
    var quantity=parseInt(input.val());
    input.val(quantity+1);
    input.trigger('change');
  });
}

// слайдер прогресс-бар
function moveProgress(percent) {
  if (isNaN(percent) || percent <0 || percent >100)
  {
    return;
  }
  var progressInner = $('.progress-inner');
  progressInner.animate({
    width:percent + '%',
  });
}

// адаптив
var currentWidth = '1920';
function maxWidth800() {
  if (currentWidth == '800' || currentWidth == '640') {
    return;
  }
  // header-menu
  $('header>.container').prepend('<div class="burger-menu"><span></span></div>');
  $('.header-toggle').append($('.header-btn .lang-toggle'));
  $('.burger-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.header-toggle').slideToggle();
  });
  $('.header-toggle ul.nav.submenu').unwrap('.container').unwrap('.submenu-wrap');
  $('.header-toggle .main-menu li').removeClass('active');
  var slinky = $('.header-toggle nav').slinky({
    title: true
  });
  currentWidth = '800';
}

function maxWidth640() {
  if (currentWidth == '640') {
    return;
  }
  // parts-table
  $('.parts-table .table-body .table-row').each(function(){
    $(this).find('.name').addClass('dropdown-toggle');
    $(this).find('.table-col:not(.name)').wrapAll('<div class="dropdown-menu"/>');
    $(this).find('.container').prepend($(this).find('.name'));
  });

  // product-tabs production-menu
  $('.product-tabs .production-menu').slick({
    variableWidth: true,
    slidesToShow: 1,
    arrows: false
  });
  currentWidth = '640';
}

$(document).ready(function () {

  // слайдер
  $('.product-slider .slider-items').slick({
    lazyLoad: 'ondemand',
    appendArrows: $('.product-slider .controls')
  });

  $('.page-slider .slider-items').slick({
    lazyLoad: 'ondemand',
    appendArrows: $('.page-slider .controls'),
    responsive: [
   {
     breakpoint: 650,
     settings: {
       arrows: false,
       dots: true
     }
   }
  ]
  });

  var slideNumber = $('.slide-number');
  var slideQuantity = $('.slide-quantity');
  var slickElement = $('.about-company-slider .slider-items');

  slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    slideNumber.text(i);
    slideQuantity.text(slick.slideCount);
    var percent = (i/slick.slideCount)*100;
    moveProgress(percent);
  });

  $('.about-company-slider .slider-items').slick({
    lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: '0',
    appendArrows: $('.about-company-slider .controls')
  });

  $('.partners__list').slick({
    lazyLoad: 'progressive',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2
        }
      },
     
    ]
  });

  $('.fancy').fancybox();

  // изменеие колличества в поле по кнопкам плюс минус
  Quan();

  //адаптив
  var mql = window.matchMedia('all and (max-width: 800px)');
  if (mql.matches) {
    maxWidth800();
  }

  var mql_2 = window.matchMedia('all and (max-width: 640px)');
  if (mql_2.matches) {
    maxWidth640();
  }

  // свернуть-развернуть
  $('.dropdown-toggle').on('click', function(){
    $(this).siblings('.dropdown-menu').slideToggle();
  });

});

$(window).resize(function() {
  // чтобы видеть адаптив при ресайзе окна
  console.log($(window).width());
  if ($(window).width()>640 && $(window).width()<=800) {
    maxWidth800();
  }
  if ($(window).width()<=640) {
    maxWidth640();
  }

});
