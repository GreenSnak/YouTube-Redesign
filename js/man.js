const myChannelSlider = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween:  20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});
const recommendedChannelSlider = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // distance between slides
  spaceBetween:  20,
   breakpoints: {
    1600: {
      slidesPerView: 3
    },
    1100: {
      slidesPerView: 2
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

});
const recommendedSlider = new Swiper('.thirdChannel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // distance between slides
  spaceBetween:  20,
   breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.thirdChannel-button-next',
    prevEl: '.thirdChannel-button-prev',
  },
});
const searchBtn = document.querySelector('.mobyle-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640) {
  myChannelSlider.destroy();
  recommendedChannelSlider.destroy();
  recommendedSlider.destroy();
}