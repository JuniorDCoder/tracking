/*

Template: Transpo - Transport & Logistics HTML Template
Author: potenzaglobalsolutions
Design and Developed by: potenzaglobalsolutions.com

NOTE: This file contains all scripts for the actual Template.

*/

/*================================================
[  Table of contents  ]
================================================

:: Menu
:: Counter
:: Owl carousel
:: Swiper slider
:: Slickslider
:: Magnific Popup
:: Shuffle
:: Datetimepicker
:: Select2
:: Range Slider
:: Countdown
:: Sticky
:: Back to top

======================================
[ End table content ]
======================================*/
//POTENZA var

(function ($) {
  "use strict";
  var POTENZA = {};

/*************************
  Predefined Variables
*************************/
  var $window = $(window),
    $document = $(document),
    $body = $('body'),
    $countdownTimer = $('.countdown'),
    $counter = $('.counter');
    $('[data-toggle="tooltip"]').tooltip()
  //Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };

/*************************
      Menu
  *************************/
  POTENZA.dropdownmenu = function () {
    if ($('.navbar').exists()) {
      $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
          $('.dropdown-submenu .show').removeClass("show");
        });
        return false;
      });
    }
  };

/*************************
    Counter
*************************/
  POTENZA.counters = function () {
    var counter = jQuery(".counter");
    if (counter.length > 0) {
      $counter.each(function () {
        var $elem = $(this);
        $elem.appear(function () {
          $elem.find('.timer').countTo();
        });
      });
    }
  };

/*************************
    Owl carousel
*************************/
  POTENZA.carousel = function () {
    var owlslider = jQuery("div.owl-carousel");
    if (owlslider.length > 0) {
      owlslider.each(function () {
        var $this = $(this),
          $items = ($this.data('items')) ? $this.data('items') : 1,
          $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
          $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
          $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
          $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
          $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
          $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
          $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
          $space = ($this.attr('data-space')) ? $this.data('space') : 30,
          $animateOut = ($this.attr('data-animateOut')) ? $this.data('animateOut') : false;

        $(this).owlCarousel({
          loop: $loop,
          items: $items,
          responsive: {
            0: {
              items: $this.data('xx-items') ? $this.data('xx-items') : 1
            },
            480: {
              items: $this.data('xs-items') ? $this.data('xs-items') : 1
            },
            768: {
              items: $this.data('sm-items') ? $this.data('sm-items') : 2
            },
            980: {
              items: $this.data('md-items') ? $this.data('md-items') : 3
            },
            1200: {
              items: $items
            }
          },
          dots: $navdots,
          autoplayTimeout: $autospeed,
          smartSpeed: $smartspeed,
          autoHeight: $autohgt,
          margin: $space,
          nav: $navarrow,
          navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
          autoplay: $autoplay,
          autoplayHoverPause: true
        });
      });
    }
  }


/*************************
    Swiper slider
*************************/

  POTENZA.swiperAnimation = function () {
  var siperslider = jQuery(".swiper-container");
  if (siperslider.length > 0) {
    var swiperAnimation = new SwiperAnimation();
      var swiper = new Swiper(".swiper-container", {
        init : true,
        direction: "horizontal",
        effect: "fade",
        loop: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        on: {
          init: function() {
            swiperAnimation.init(this).animate();
          },
          slideChange: function() {

            swiperAnimation.init(this).animate();
          }
        }
      });
    }
  }

/*************************
    Slickslider
*************************/
  POTENZA.slickslider = function () {
    if ($('.slider-for').exists()) {
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });
    }
    if ($('.slider-main').exists()) {
      $('.slider-main').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.slider-arrow',
        vertical: false,
        autoplay: false,
        verticalSwiping: false,
        centerMode: false
      });
      $('.slider-arrow').slick({
        slidesToShow: 3,
        arrows: false,
        asNavFor: '.slider-main',
        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        centerMode: true
      });
    }
  };

  /*************************
      Magnific Popup
  *************************/
  POTENZA.mediaPopups = function () {
    if ($(".popup-single").exists() || $(".popup-gallery").exists() || $('.modal-onload').exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
      if ($(".popup-single").exists()) {
        $('.popup-single').magnificPopup({
          type: 'image'
        });
      }
      if ($(".popup-gallery").exists()) {
        $('.popup-gallery').magnificPopup({
          delegate: 'a.portfolio-img',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          }
        });
      }
      if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      }
      var $modal = $('.modal-onload');
      if ($modal.length > 0) {
        $('.popup-modal').magnificPopup({
          type: 'inline'
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
        var elementTarget = $modal.attr('data-target');
        setTimeout(function () {
          $.magnificPopup.open({
            items: {
              src: elementTarget
            },
            type: "inline",
            mainClass: "mfp-no-margins mfp-fade",
            closeBtnInside: !0,
            fixedContentPos: !0,
            removalDelay: 500
          }, 0)
        }, 1500);
      }
    }
  }


  /*************************
      Shuffle
  *************************/
   POTENZA.shuffle = function () {
   if ($('.my-shuffle-container').exists()) {
    var Shuffle = window.Shuffle;
      var element = document.querySelector('.my-shuffle-container');
      var sizer = element.querySelector('.my-sizer-element');
      var shuffleInstance = new Shuffle(element, {
        itemSelector: '.grid-item',
        sizer: sizer, // could also be a selector: '.my-sizer-element'
        speed: 700,
        columnThreshold: 0
      });
      jQuery(document).ready(function(){
        jQuery(".btn-filter").on( 'click', function(){
          var data_group = jQuery(this).attr('data-group');
          if( data_group != 'all' ){
            shuffleInstance.filter([data_group]);
          } else {
            shuffleInstance.filter();
          }
        });
        $(".filters-group .btn-filter").on( 'click', function(){
            $(".filters-group .btn-filter").removeClass("active");
            $(this).addClass("active");
        });
    });
  }
 }

  /*************************
      datetimepicker
  *************************/
  POTENZA.datetimepickers = function () {
    if ($('.datetimepickers').exists()) {
      $('#datetimepicker-01, #datetimepicker-02').datetimepicker({
        format: 'L'
      });
      $('#datetimepicker-03, #datetimepicker-04').datetimepicker({
        format: 'LT'
      });
    }
  };

  /*************************
      select2
  *************************/
  POTENZA.select2 = function () {
    if ($('.basic-select').exists()) {
      var select = jQuery(".basic-select");
      if (select.length > 0) {
        $('.basic-select').select2({dropdownCssClass : 'bigdrop'});
      }

    }
  };

  /*************************
      Range Slider
  *************************/
  POTENZA.rangesliders = function () {
    if ($('.property-price-slider').exists()) {
      var rangeslider = jQuery(".rangeslider-wrapper");
      $("#property-price-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000,
        from: 1000,
        to: 8000,
        prefix: "$",
        hide_min_max: true,
        hide_from_to: false
      });
    }
  };

  /*************************
      Countdown
  *************************/
  POTENZA.countdownTimer = function () {
    if ($countdownTimer.exists()) {
      $countdownTimer.downCount({
        date: '12/25/2020 12:00:00', // Month/Date/Year HH:MM:SS
        offset: -4
      });
    }
  }

/*************************
         Sticky
*************************/

POTENZA.isSticky = function () {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
       $('.header-sticky').addClass('is-sticky');
    } else {
       $('.header-sticky').removeClass('is-sticky');
    }
  });
};

/*************************
     Back to top
*************************/
POTENZA.goToTop = function () {
  var $goToTop = $('#back-to-top');
  $goToTop.hide();
  $window.scroll(function () {
    if ($window.scrollTop() > 100) $goToTop.fadeIn();
    else $goToTop.fadeOut();
  });
  $goToTop.on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
}


/*************************
     particlesJS
*************************/
POTENZA.particlesJS = function () {
  if ($('#particles-js').exists()) {
 particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#6f6f6f"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#6f6f6f",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
  }
};


 /****************************************************
       POTENZA Window load and functions
 ****************************************************/
  //Document ready functions
  $document.ready(function () {
    POTENZA.counters(),
    POTENZA.slickslider(),
    POTENZA.datetimepickers(),
    POTENZA.select2(),
    POTENZA.dropdownmenu(),
    POTENZA.goToTop(),
    POTENZA.swiperAnimation(),
    POTENZA.countdownTimer(),
    POTENZA.mediaPopups(),
    POTENZA.isSticky(),
    POTENZA.shuffle(),
    POTENZA.particlesJS(),
    POTENZA.rangesliders(),
    POTENZA.carousel()
  });
})(jQuery);





