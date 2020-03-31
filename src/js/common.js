import $ from "jquery";

import "slick-carousel";
import "slick-carousel/slick/slick.css";


window.$ = $;
window.jQuery = $;

require("./main.js");
require("./slinky.min.js");
require("./jquery.fancybox.js");
require("../css/jquery.fancybox.css");

// document.addEventListener("DOMContentLoaded", function(){

// 	$(".fancybox").fancybox({
// 		trapFocus: false,
// 		touch: false,
// 		buttons: ["fullscreen", "close", "thumbs"],
// 		image: {
// 			preload: true,
// 		},
// 		transitionEffect: "slide",
// 	});
// })


;(function() {

  // проверяем поддержку
  if (!Element.prototype.matches) {

    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;

  }

})();

(function() {

  // проверяем поддержку
  if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})();

document.addEventListener("DOMContentLoaded", e => {

	$('.search-btn').click(function(){
    $('body').toggleClass('js__search-opened');
  })

  $('.top-search__close').click(function(){
     $('body').removeClass('js__search-opened');
  })



});


$(window).on("load resize", e => {

  var headerHeight = $('header').innerHeight();
  $('.top-search__cont').css({
    top: headerHeight,
  })

  
});



document.addEventListener("DOMContentLoaded", e => {

  if($(window).width() < 1000){
    $(".tab-content table").wrap('<div class="table-wrap"><div class="table-wrap__track"></div></div>')

    $(".table-wrap")
      .prepend('<div class="table-wrap__shadow table-wrap__shadow--left"></div>')
      .append('<div class="table-wrap__shadow table-wrap__shadow--right"></div>')

    let tableWrapTracks = document.querySelectorAll(".table-wrap__track");

    if (!tableWrapTracks.length)
      return

    for (var track of tableWrapTracks){
      
      if (track.scrollWidth > track.clientWidth){
        let wrap = track.closest(".table-wrap");

        let shadows = {
          right: wrap.querySelector(".table-wrap__shadow--right")
        };

        setShadowOpacity(shadows.right, track.scrollWidth - track.clientWidth)
      }

      track.addEventListener("scroll", function(e){
        let wrap = this.closest(".table-wrap");

        let shadows = {
          left: wrap.querySelector(".table-wrap__shadow--left"),
          right: wrap.querySelector(".table-wrap__shadow--right")
        };

        setShadowOpacity(shadows.right, this.scrollWidth - this.clientWidth - this.scrollLeft)
        setShadowOpacity(shadows.left, this.scrollLeft)
      })
    }
    
  }

})

const setShadowOpacity = (element, scrollWidth, offsetWidth = 30) => {
  element.style.opacity = scrollWidth / offsetWidth <= 1 ? scrollWidth / offsetWidth : 1
}



$(window).on("load", e => {
  var $video = $('video');

  if(!$video.length){
    return
  }

  var dataSrc = $video.attr('data-src');
  $video.attr('src', dataSrc);
  
  $video[0].play();


});

