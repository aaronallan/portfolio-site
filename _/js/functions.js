// remap jQuery to $
(function($){  

  var w     = $(window).width();
  var h     = $(window).height();
  
  $('#fixed-container').css('height', h);

  $('.sticky-element').waypoint('sticky');

  $(function() {
    $('.welcome').each(function(i) {
    $(this).delay((i++) * 600).fadeTo(1000, 1); })
  });

  // $('.iphone').waypoint(function(direction) {
  //   //$(this).toggleClass('rotate', direction === 'down');
  //   $(this).toggleClass('device-animation');
  //   $('.iphone-portrait').toggleClass('portrait-animation');
  //   $('.iphone-landscape').toggleClass('landscape-animation');
  // }, { offset: '35%'});

  // $('.ipad').waypoint(function(direction) {
  //   //$(this).toggleClass('rotate', direction === 'down');
  //   $(this).toggleClass('device-animation');
  //   $('.ipad-portrait').toggleClass('portrait-animation');
  //   $('.ipad-landscape').toggleClass('landscape-animation');
  // }, { offset: '35%'});

  $(document).ready(function(){
    $('section.main-section').waypoint(function(direction) {
      //var activeSection = $(this).next();
      var activeSection = $(this);
      if(direction === 'down'){
          activeSection = $(this);
      } else if (direction === 'up') {
        activeSection = $(this).prev();
      }
      //activeSection = $(this);
      var sectionId   = activeSection.attr('id');
      $('ul li').removeClass('active');
      $('ul li.' + sectionId).addClass('active');
    }, {offset: 90});

    if($('html').hasClass('no-backgroundsize')){
      $('body').css('background', '#eeeeee');
      $('body').html('<div class="ie8-message">This site currently does not support IE8. Please upgrade your browser, switch to Chrome, Firefox or Safari. Contact me directly at aaron.a.pollock@gmail.com.</div>');
    }

  });

  //Reponsive Menu

  function check_size() {
    if (document.documentElement.clientWidth < 641) {
        return true;
    } else {
        return false;
    }
  }

  $(window).bind('orientationchange', check_size());

  var $pull = $('.hamburger');
  var $menu = $('nav div ul');
  var $menuItem = $('.menu-item a');
  var menuHeight = $menu.height();

  $pull.on('click', function (e) {
      e.preventDefault();
      $menu.slideToggle();
  });
  
   $menuItem.each(function () {
    var $that = $(this);

      $that.on('click', function () {
          var checkSize = check_size();

          if ((checkSize === true && !$that.hasClass('logo')) || (checkSize === true && $that.hasClass('logo') && $menu.is(':visible'))) {
              $menu.slideToggle();
          }
      });
   });

  $(window).resize(function () {
      var w = $(window).width();
      if (w > 320 && $menu.is(':hidden')) {
          $menu.removeAttr('style');
      }

      check_size();
  });

  //Smooth Scrolling

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -80
        }, 750, 'swing');
        return false;
      }
    }
  });

  if('ontouchstart' in document){
    $('.cube').click(function(){
      $(this).addClass('rotate-el');
    },
    function(){
      $(this).removeClass('rotate-el');
    });
  }

})(window.jQuery);