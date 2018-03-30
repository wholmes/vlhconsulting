var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;
var pathArray = window.location.pathname.split( '/' );
var segment_1 = pathArray[1];

jQuery(document).ready (function($){

  /*if (window.location.hash == "#home") {
      $('body').addClass('scroll');
  }*/

if(segment_1  ==  "/") {
  $(body).addClass('.rocket');
}



  /* Show More Reveal */
  var numberOfItemsToShow = 1;
  $('.showMore').click(function(e) {
      e.stopPropagation();
      e.preventDefault();

      if (window.isScroll) {
          $('html, body').animate({
              scrollTop: $(".showMore").offset().top
          }, 0);
      } else {
          $('.content').animate({
              scrollTop: $(".showMore").position().top
          }, 0);
      }

      if ($('.items-container p.hidden').length <= numberOfItemsToShow) {
          $('.showMore').remove();
      }

      $('.items-container p.hidden:lt(' + numberOfItemsToShow + ')').removeClass('hidden').find('.done').removeClass('done');
  });

  /* Page Highlighting */
  $(".customDropdown li").on("click", function() {
      $(this).addClass("selected").siblings().removeClass("selected");
  });

  $(".mainMenu li").on("click", function() {
      $('.customDropdown li').removeClass("selected");
  });
  $('a[href^="mailto:"]').each(function() {
    this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
    this.innerHTML = this.href.replace('mailto:', '');
  });

  // var loc = window.location.href;
  if (window.location.hash == "#who-we-are") {
      $("li.who-we-are", "li.about").addClass("selected");
  }
  if (window.location.hash == "#what-we-do") {
      $("li.what-we-do", "li.about").addClass("selected");
  }
  if (window.location.hash == "#leadership") {
      $("li.leadership", "li.about").addClass("selected");
  }

  function mediaSize() { 
    if (window.matchMedia('(min-width: 768px)').matches) {
      $('.leader-wrap').addClass('left');
    } else {
      $('.leader-wrap').removeClass('left');
    }
  }
  mediaSize();
  window.addEventListener('resize', mediaSize, false);  

});