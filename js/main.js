$(function () {

  $('.header-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 471,
        settings: {
          dots: false,
        }
      },
    ]
  });

  var hotProductSliderAll = new Swiper('.hot-products__slider--all', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 47,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    initialSlide: 2,
    spaceBetween: 30,
    observeParents: true,
    observeSlideChildren: true,
    observer: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 1,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1180: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1270: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });

  var hotProductSliderr = new Swiper('.hot-products__sliderr', {
    observeParents: true,
    observeSlideChildren: true,
    observer: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 1,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1180: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1270: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });

  $('.tab').on('click', function (e) {

    e.preventDefault()

    $($(this).siblings()).removeClass('tab--active')
    $($(this).closest('.hot-products__top-inner').siblings().find('div')).removeClass('tabs-content--active')

    $(this).addClass('tab--active')
    $($(this).attr('href')).addClass('tabs-content--active')


  });


  $('.menu-btn').on('click', function () {
    $('.menu__list').toggleClass('active')
    $('.menu-btn').toggleClass('active')
    $('.menu-btn--closes').toggleClass('active')
  });


})