document.addEventListener("DOMContentLoaded", function() {

  $("body").on("click", ".mobile-menu-btn", function(e) {
    e.preventDefault();
  });
  $("body").on("click", function(e) {
    var mobileMenu = $(".mobile-menu-block");
    var mobileMenuLink = $(".mobile-menu-btn");
    if (mobileMenuLink.is(e.target)) {
      if ($(".mobile-menu-btn").is(".active")) {
        mobileMenuLink.removeClass("active")
        mobileMenu.removeClass("active")
      } else {
        mobileMenuLink.addClass("active")
        mobileMenu.addClass("active")
      }
    } else {
      if (!mobileMenu.is(e.target) && mobileMenu.has(e.target).length === 0) {
        if ($(".mobile-menu-btn").is(".active")) {
          $(".mobile-menu-btn").removeClass("active")
          mobileMenu.removeClass("active")
        } else {}
      }
    }
  });
  $("body").on("click", ".mobile-menu-close-btn", function(e) {
    e.preventDefault();
    $(".mobile-menu-btn").removeClass("active")
    $(".mobile-menu-block").removeClass("active")
  });

  var tapped = false
  $(".mobile-menu .menu-item-has-children > a").on("touchstart", function(e) {
    $link = $(this);
    if (!tapped) {
      tapped = setTimeout(function() {
        tapped = null

        if ($link.is('.opened')) {
          $link.removeClass('opened').next().slideUp();
        } else {
          $link.addClass('opened').next().slideDown();
        }
      }, 300);
    } else {
      clearTimeout(tapped);
      tapped = null

      $locate = $(this).attr('href')
      document.location.href = $locate;
    }
    e.preventDefault()
  });

  var lazyLoadInstance = new LazyLoad({});

  $(".mp-one-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
    $(this).parents(".mp-one-slider-block").find(".mos-c-current").text(nextSlide + 1);
    $(this).parents(".mp-one-slider-block").find(".mos-c-total").text($(this).slick("getSlick").slideCount)

    $prHandlerWidth = ((nextSlide + 1) / ($(this).slick("getSlick").slideCount)) * 100
    $(".mp-one-slider-progress-handler").css("width", $prHandlerWidth + "%")
  });

  $("body").on("click", ".mp-one-slide-item", function(e) {
    e.preventDefault();
    $Index = $(this).parent().data('slick-index')
    $('.mp-one-slider').slick('slickGoTo', $Index)
  });

  $('.mp-one-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    },
    ]
  });


  $('.mp-two-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        variableWidth: true,
        slidesToShow: 1,
      }
    }, ]
  });


  $('.mp-seven-top-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 1,
      }
    }, ]
  });

  $('.mp-nine-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: true,
        variableWidth: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        variableWidth: false,
        slidesToShow: 3,
      }
    },
    ]
  });

  $('.mp-eleven-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        variableWidth: true,
        slidesToShow: 1,
      }
    }, ]
  });

  $('.mp-thirteen-slider').slick({
    slidesToShow: 2,
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        variableWidth: true,
        infinite: false,
        slidesToShow: 1,
      }
    }, ]
  });

  $('.mp-fourteen-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        variableWidth: true,
        slidesToShow: 1,
      }
    }, ]
  });

  $('.mp-seventeen-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 1,
      }
    }, ]
  });

  $('.mp-seventeen-benefit-slider').slick({
    slidesToShow: 4,
    arrows: false,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      }
    },
    ]
  });

  $('.mp-nineteen-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      }
    }, ]
  });

  $('.mp-twenty-expert-slider').slick({
    slidesToShow: 3,
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: true,
      }
    },
    ]
  });

  $('.mp-blog-item-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: true,
      }
    },
    ]
  });

  $('.mp-blog-link-slider').slick({
    slidesToShow: 4,
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 1240,
      settings: {
        arrows: true,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: true,
      }
    },
    ]
  });

  $("body").on("click", ".faq-heading", function(e) {
    e.preventDefault();

    if ($(this).parent().is(".active")) {
      $(this).parent().removeClass("active");
      $(this).next().slideUp();
    } else {
      $(this).parent().addClass("active");
      $(this).next().slideDown();
    }
  });

  $("body").on("click", ".footer-menu-title", function(e) {
    e.preventDefault();

    if ($(this).parent().is(".active")) {
      $(this).parent().removeClass("active");
      $(this).next().slideUp();
    } else {
      $(this).parent().addClass("active");
      $(this).next().slideDown();
    }
  });

  $("body").on("focus", "input[name='phone']", function() {
    if (!$(this).val()) {
      $(this).val("+7 (");
    }
  });
  $("body").on("blur", "input[name='phone']", function() {
    if ($(this).val() == "+7 (") {
      $(this).val("");
    }
  });




  $('.s-analytics-three-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    variableWidth: true,
    // autoplaySpeed: 3000,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
      }
    },
    {
      breakpoint: 768,
      settings: {
      }
    },
    ]
  });


  $("body").on("click",".ana-tool-link",function (e){
    e.preventDefault();
    $index = $(this).data('index');
    $('.ana-tool-slider').slick('slickGoTo', $index);

    $(".ana-tool-link").removeClass('active')
    $(this).addClass("active")

  });

  $('.ana-tool-slider').slick({
    slidesToShow: 1,
    // slidesToScroll: 1,
    // initialSlide: 1,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 1,
      }
    }, ]
  });

  $(".ana-tool-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
    $(this).parents(".ana-tool-slider-block").find(".ats-c-current").text(nextSlide + 1);
    $(this).parents(".ana-tool-slider-block").find(".ats-c-total").text($(this).slick("getSlick").slideCount)

    $(".ana-tool-link").removeClass('active')
    $(".ana-tool-link[data-index="+ nextSlide +"]").addClass("active")

  });




  $('.report-slider').slick({
    slidesToShow: 3,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: true,
        variableWidth: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        infinite: false,
        variableWidth: false,
        slidesToShow: 1,
      }
    },
    ]
  });



  $('.ana-nine-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: false,
    variableWidth: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    },
    ]
  });



  $("body").on("click",".saf-data-item-heading",function (e){
    e.preventDefault();

    if ($(this).parent().is(".active")){
      $(this).parent().removeClass("active");
      $(this).next().slideUp();
    } else{
      $(this).parent().addClass("active");
      $(this).next().slideDown();
    }
  });





  $('.wnw-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 0.5,
        slidesToScroll: 0.5,
        // initialSlide: 0.5,
      }
    }, ]
  });

  $(".wnw-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
    $(this).parents(".wnw-slider-block").find(".wnws-c-current").text(nextSlide + 1);
    $(this).parents(".wnw-slider-block").find(".wnws-c-total").text($(this).slick("getSlick").slideCount)
  });


  $('.s-analytics-four-top-img-mobile img').parent().animate({
    scrollLeft: ($('.s-analytics-four-top-img-mobile img').outerWidth() - $('.s-analytics-four-top-img-mobile img').parent().outerWidth()) / 2,
  }, 1)



  $("body").on("click",".ana-tool-mobile-item-heading",function (e){
    e.preventDefault();

    if ($(this).parent().is(".active")){
      $(this).parent().removeClass("active");
      $(this).next().slideUp();
    } else{
      $(this).parent().addClass("active");
      $(this).next().slideDown();
    }
  });


  // $('.popup-btn').fancybox({
  //   btnTpl: {
  //     smallBtn:
  //     '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
  //     "</button>"
  //   },
  //   touch: false,
  // });

});

window.addEventListener("scroll", adapt_scroll_blocks)
window.addEventListener("resize", adapt_scroll_blocks)

function adapt_scroll_blocks() {
  if ( $(".mp-three-block").length > 0 ) {

    if ($(window).scrollTop() + $(window).height() + 50 > $(".mp-three-block").offset().top) {
      $max = $(".mp-three-scroll-items").height() - $('.mp-three-scroll-items-block').height();
      $rate = ($(".mp-three-scroll-items").height() - $('.mp-three-scroll-items-block').height() + 200) / ($(window).height() + $(".mp-three-block").outerHeight())
      $offset = ($(window).scrollTop() + $(window).height() - $(".mp-three-block").offset().top - 200) * $rate
      $offset = $offset < $max ? $offset : $max;
      $(".mp-three-scroll-items").css("top", "-" + $offset + "px")
    }
  }

  if ( $(".mp-twelve-block").length > 0 ) {
    if ($(window).scrollTop() + $(window).height() > $(".mp-twelve-block").offset().top) {
      $max = $(".mp-twelve-scroll-items").height() - $('.mp-twelve-scroll-items-block').height();
      $rate = ($(".mp-twelve-scroll-items").height() - $('.mp-twelve-scroll-items-block').height() + 100) / ($(window).height() + $(".mp-twelve-block").outerHeight())
      $offset = ($(window).scrollTop() + $(window).height() - $(".mp-twelve-block").offset().top - 200) * $rate
      $offset = $offset < $max ? $offset : $max;
      $(".mp-twelve-scroll-items").css("top", "-" + $offset + "px")
    }
  }
}
