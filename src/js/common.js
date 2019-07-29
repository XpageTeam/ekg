import $ from "jquery";

import "slick-carousel";
import "slick-carousel/slick/slick.css";


window.$ = $;
window.jQuery = $;

require("./main.js");
require("./slinky.min.js");
require("./jquery.fancybox.js");
require("../css/jquery.fancybox.css");


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

