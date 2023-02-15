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

function onOpenModalButtonClick(evt, currentModal, successModal = ``) {
  evt.preventDefault();
  const body = document.querySelector(`body`);
  currentModal.classList.remove(`modal--hidden`);
  body.classList.add(`body--locked`);

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

