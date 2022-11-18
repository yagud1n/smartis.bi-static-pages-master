document.addEventListener("DOMContentLoaded", function () {

  // анимация hero
  var canvasBody = document.querySelector(".canvas");
  if (canvasBody) {
    var canvas = canvasBody.getContext("2d");

    var w = canvasBody.width = window.innerWidth;
    var h = canvasBody.height = window.innerHeight;

    var tick = 0;

    var opts = {
      backgroundColor: "red",
      particleColor: "#fcfcfc",
      opacity: 0.2,
      particleAmount: 100,
      defaultSpeed: 0.7,
      addedSpeed: 0.7,
      defaultRadius: 2,
      addedRadius: 5,
      communicationRadius: 150,

    };

    if (window.innerWidth < 991) {
      var opts = {
        backgroundColor: "red",
        particleColor: "#fcfcfc",
        opacity: 0.2,
        particleAmount: 60,
        defaultSpeed: 0.7,
        addedSpeed: 0.7,
        defaultRadius: 2,
        addedRadius: 5,
        communicationRadius: 150,

      };
    }

    if (window.innerWidth < 576) {
      var opts = {
        backgroundColor: "red",
        particleColor: "#fcfcfc",
        opacity: 0.2,
        particleAmount: 30,
        defaultSpeed: 0.7,
        addedSpeed: 0.7,
        defaultRadius: 2,
        addedRadius: 5,
        communicationRadius: 150,
      };
    }

    var particles = [];

    var Particle = function (Xpos, Ypos) {
      this.x = Xpos ? Xpos : Math.random() * w;
      this.y = Ypos ? Ypos : Math.random() * h;
      this.speed = opts.defaultSpeed + Math.random() * opts.addedSpeed;
      this.directionAngle = Math.floor(Math.random() * 360);
      this.radius = opts.defaultRadius + Math.random() * opts.addedRadius;
      if (this.radius >= 5) { this.shrinkOrGrow = 'shrink' } else { this.shrinkOrGrow = 'grow' };
      this.d = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed
      };
      this.update = function () {
        this.border();
        this.x += this.d.x;
        this.y += this.d.y;
        if (this.shrinkOrGrow == 'shrink') { this.radius -= 0.02 };
        if (this.shrinkOrGrow == 'grow') { this.radius += 0.02 };
        if (this.radius <= opts.defaultRadius) { this.shrinkOrGrow = 'grow' }
        if (this.radius >= opts.addedRadius) { this.shrinkOrGrow = 'shrink' }
      };
      this.border = function () {
        if (this.x >= w || this.x <= 0) {
          this.d.x *= -1;
        }
        if (this.y >= h || this.y <= 0) {
          this.d.y *= -1;
        }
        this.x > w ? this.x = w : this.x;
        this.y > h ? this.y = h : this.y;
        this.x < 0 ? this.x = 0 : this.x;
        this.y < 0 ? this.y = 0 : this.y;
      };
      this.draw = function () {
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        var gradient = canvas.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, '#dceafd');
        gradient.addColorStop(1, '#dceafd');
        canvas.closePath();
        canvas.fillStyle = gradient;
        canvas.fill();
      };
    }
    var checkDistance = function (x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    var communicatePoints = function (point1, father) {
      for (var i = 0; i < father.length; i++) {
        var distance = checkDistance(point1.x, point1.y, father[i].x, father[i].y);
        var opacity = 1 - distance / opts.communicationRadius;
        if (opacity > 0) { //Draws the line
          canvas.lineWidth = opacity;
          canvas.strokeStyle = "#dceafd";
          canvas.beginPath();
          canvas.moveTo(point1.x, point1.y);
          canvas.lineTo(father[i].x, father[i].y);
          canvas.shadowBlur = 0;
          canvas.closePath();
          canvas.stroke();
        }
      }
    };

    function setup() {
      for (var i = 0; i < opts.particleAmount; i++) {
        particles.push(new Particle());
      }
      window.requestAnimationFrame(loop);
    }

    function loop() {
      window.requestAnimationFrame(loop);
      tick++;

      canvas.clearRect(0, 0, w, h);

      for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      for (var a = 0; a < particles.length; a++) {
        communicatePoints(particles[a], particles);
      }
    }

    setup();
    window.addEventListener("resize", function () {
      w = canvasBody.width = window.innerWidth;
      h = canvasBody.height = window.innerHeight;
    });

    canvasBody.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      particles.splice(particles.length - 1, 1);
    });
  }
  // слайдер
  $(".conversion-slider")
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $(this).parents(".conversion__slider-wrapper").find(".conversion__current").text(nextSlide + 1);
    $(this).parents(".conversion__slider-wrapper").find(".conversion__total").text($(this).slick("getSlick").slideCount)

    $prHandlerWidth = ((nextSlide + 1) / ($(this).slick("getSlick").slideCount)) * 100
    $(".conversion__progressbar").css("width", $prHandlerWidth + "%")
  })
  .on('afterChange', function(event, slick, currentSlide, nextSlide) {
    let slide = $('.conversion-slider [data-slick-index="' + currentSlide + '"]')
    let title = slide.data('title')
    let text = slide.data('text')

    $('.conversion__slider-content-wrapper .conversion__slider-title').html(title)
    $('.conversion__slider-content-wrapper .conversion__slider-text').html(text)
  });

  // $("body").on("click", ".conversion-slider__item", function (e) {
  //   e.preventDefault();
  //   $Index = $(this).parent().data('slick-index')
  //   $('.conversion-slider').slick('slickGoTo', $Index)
  // });

  $('.conversion-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: $('.conversion__slick-prev'),
    nextArrow: $('.conversion__slick-next'),
    init: function() {
      $('.conversion-slider').trigger('afterChange')
    },
  });


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

const menuLinks = document.querySelectorAll('.navigation__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

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

});
