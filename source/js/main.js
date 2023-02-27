const pageHeader = document.querySelector('.page-header');
const navToggle = document.querySelector('.js_open-menu');

navToggle.addEventListener('click', function() {
  pageHeader.classList.toggle('page-header--nav-open');
});

const advantagesSliderContainer = document.querySelector('.advantages__slider-container');

if (document.body.clientWidth <= '1024') {
  if (advantagesSliderContainer) {
    new Swiper(advantagesSliderContainer, {
      slidesPerView: 'auto',
      spaceBetween: 24,
      direction: 'horizontal',
    })
  }
}

const compositionSliderContainer = document.querySelector('.composition__slider-container');

if (document.body.clientWidth <= '767') {
  if (compositionSliderContainer) {
    new Swiper(compositionSliderContainer, {
      slidesPerView: 'auto',
      spaceBetween: 24,
      direction: 'horizontal',
    })
  }
}

const promotionSliderContainer = document.querySelector('.promotion__slider-container');

if (promotionSliderContainer) {
  const nextButton = promotionSliderContainer.querySelector('.promotion__slider-btn--next');
  const prevButton = promotionSliderContainer.querySelector('.promotion__slider-btn--prev');

  new Swiper(promotionSliderContainer, {
    slidesPerView: 'auto',
    spaceBetween: 24,
    direction: 'horizontal',

    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  })
}

const advantagesClubSliderContainer = document.querySelector('.advantages-club__slider-container');

if (document.body.clientWidth <= '1024') {
  if (advantagesClubSliderContainer) {
    new Swiper(advantagesClubSliderContainer, {
      slidesPerView: 'auto',
      spaceBetween: 24,
      direction: 'horizontal',
    })
  }
}

const productThumbsSliderContainer = document.querySelector(`.product__thumbs-container`);
if (productThumbsSliderContainer) {

  const initproductSliders = function () {


    let productThumbsSlider = ``;

    productThumbsSlider = new Swiper(productThumbsSliderContainer, {
      slidesPerView: 'auto',
      spaceBetween: 8,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    const productSlider = document.querySelector(`.product__slider-container`);

    if (productSlider) {

      const productSliderPrevButton = productSlider.querySelector('.swiper-button-prev');
      const productSliderNextButton = productSlider.querySelector('.swiper-button-next');
      new Swiper(productSlider, {
        slidesPerView: 1,

        thumbs: {
          swiper: productThumbsSlider
        },

        navigation: {
          nextEl: productSliderNextButton,
          prevEl: productSliderPrevButton,
        },
      });
    }
  }

  initproductSliders();
}

function onOpenModalButtonClick(evt, currentModal, successModal = ``) {
  evt.preventDefault();
  const body = document.querySelector(`body`);
  currentModal.classList.remove(`modal--hidden`);
  body.classList.add(`body--locked`);

  if (currentModal === galleryModal) {

    const productThumbsSliderContainer = currentModal.querySelector(`.product__thumbs-container`);

    if (productThumbsSliderContainer) {

      const initproductSliders = function () {

        let productThumbsSlider = ``;

        productThumbsSlider = new Swiper(productThumbsSliderContainer, {
          slidesPerView: 'auto',
          spaceBetween: 16,
          freeMode: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
        });

        const productSlider = currentModal.querySelector(`.product__slider-container`);

        if (productSlider) {

          const productSliderPrevButton = productSlider.querySelector('.swiper-button-prev');
          const productSliderNextButton = productSlider.querySelector('.swiper-button-next');
          new Swiper(productSlider, {
            slidesPerView: 1,

            thumbs: {
              swiper: productThumbsSlider
            },

            navigation: {
              nextEl: productSliderNextButton,
              prevEl: productSliderPrevButton,
            },
          });
        }
      }

      initproductSliders();
    }
  }

  const closeButton = currentModal.querySelector(`.js_close-modal`);

  function closeModal() {
    currentModal.classList.add(`modal--hidden`);
    body.classList.remove(`body--locked`);
    closeButton.removeEventListener(`click`, onCloseButtonClick);
    document.removeEventListener(`keydown`, onEscButtonPress);
    currentModal.removeEventListener(`click`, onOverlayClick);
  }

  function onEscButtonPress(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      onCloseButtonClick(evt);
    }
  }

  function onOverlayClick (evt) {
    if (evt.target === currentModal) {
      onCloseButtonClick(evt);
    }
  }

  function onCloseButtonClick (evt) {
    evt.preventDefault();
    closeModal();
  }

  closeButton.addEventListener(`click`, onCloseButtonClick);
  document.addEventListener(`keydown`, onEscButtonPress);
  currentModal.addEventListener(`click`, onOverlayClick);
}

(function () {
  const openStoryModalButton = document.querySelector(`.js_open-story-modal`);
  const storyModal = document.querySelector(`.modal--story`);

  if (openStoryModalButton) {
    openStoryModalButton.addEventListener(`click`, function (evt) {
      onOpenModalButtonClick(evt, storyModal);
    })
  }
})();


let currentOpenedSection = ``;
function manageSections (evt, currentSection) {

  if (currentOpenedSection && currentOpenedSection !== evt.target.closest(`.opened`)) {
    currentOpenedSection.classList.remove(`opened`);
  }

  currentSection.classList.toggle(`opened`);
  currentOpenedSection = currentSection;
}


const descriptionContainer = document.querySelector(`.product__description`);
const showDescriptionBtn = document.querySelector(`.js_show-description`);

function onShowDescriptionBtnClick(evt) {
  evt.preventDefault();
  manageSections(evt, descriptionContainer);
}

if (showDescriptionBtn) {
  showDescriptionBtn.addEventListener(`click`, onShowDescriptionBtnClick)
}


const compositionContainer = document.querySelector(`.product__composition`);
const showСompositionBtn = document.querySelector(`.js_show-composition`);

function onShowСompositionBtnClick(evt) {
  evt.preventDefault();
  manageSections(evt, compositionContainer);
}

if (showСompositionBtn) {
  showСompositionBtn.addEventListener(`click`, onShowСompositionBtnClick)
}

const energyContainer = document.querySelector(`.product__energy`);
const showEnergyBtn = document.querySelector(`.js_show-energy`);

function onShowEnergyBtnClick(evt) {
  evt.preventDefault();
  manageSections(evt, energyContainer);
}

if (showEnergyBtn) {
  showEnergyBtn.addEventListener(`click`, onShowEnergyBtnClick)
}


const eatingContainer = document.querySelector(`.product__eating`);
const showEatingBtn = document.querySelector(`.js_show-eating`);

function onShowEatingBtnClick(evt) {
  evt.preventDefault();
  manageSections(evt, eatingContainer);
}

if (showEatingBtn) {
  showEatingBtn.addEventListener(`click`, onShowEatingBtnClick)
}


const openPromoModalButtons = document.querySelectorAll('.js_open-promo-modal');
const promoModal = document.querySelector('.modal--promotion');

if (openPromoModalButtons.length > 0) {
  Array.from(openPromoModalButtons).forEach(openPromoModalButton => {
    openPromoModalButton.addEventListener('click', function (evt) {
      onOpenModalButtonClick(evt, promoModal);
    })
  })
}

const galleryModalOpenButtons = document.querySelectorAll(`.js_open-gallery-modal`);
const galleryModal = document.querySelector(`.modal--gallery`);

if (galleryModalOpenButtons.length > 0) {
  Array.from(galleryModalOpenButtons).forEach(button => {
    button.addEventListener(`click`, function (evt) {
      onOpenModalButtonClick(evt, galleryModal);
    });
  })
}
