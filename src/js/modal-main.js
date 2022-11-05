import * as API from './api';
import { createMarkupModal } from './createMarkup';
import { refs } from './refs';
import { save, load } from '../utils/storage';

const addToWatchedBtn = document.querySelector('.modal__btn--watched');
const addToQueuedBtn = document.querySelector('.modal__btn--queue');

const TREND_KEY = 'trend';
const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

async function onClickCard(e) {
  window.addEventListener('keydown', onEscKey);

  e.preventDefault();
  const elt = e.target.closest('.film-gallery__list');

  if (elt) {
    const currentEl = e.target;
    const movieId = currentEl.dataset.id;
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.btnAddWatched.setAttribute('data-id', movieId);
    refs.btnAddQueue.setAttribute('data-id', movieId);

    try {
      const movieInfo = await API.getMovieById(movieId);
      const markupModal = createMarkupModal(movieInfo);
      refs.modalList.insertAdjacentHTML('beforeend', markupModal);
    } catch (error) {
      console.log(error.message);
    }
  }
}

async function addToWatched(e) {
  const moviesDataTrend = load(TREND_KEY);

  if (!load(WATCHED_KEY)) {
    save(WATCHED_KEY, []);
  }

  const moviesDataLibrary = load(WATCHED_KEY);
  save(WATCHED_KEY, [...moviesDataLibrary]);

  const { id } = e.target.dataset;
  const idNum = Number(id);
  const movieDataById = moviesDataTrend.find(item => item.id === idNum);
  const moviesData = [];
  moviesData.push(movieDataById);

  if (moviesDataLibrary.every(item => item.id !== idNum)) {
    save(WATCHED_KEY, [...moviesDataLibrary, ...moviesData]);
  }
}

async function addToQueue(e) {
  if (!load(QUEUE_KEY)) {
    watched.push(trend.find(item => item.id === idNum));
    return save(QUEUE_KEY, watched);
  }
  const some = watched.some(item => item.id === idNum);
  if (some) {
    console.log('Этот фильм уже в списке');
  }
}

addToWatchedBtn.addEventListener('click', addToWatched);
addToQueuedBtn.addEventListener('click', addToQueue);

function onCloseBtn() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');

  refs.modalList.innerHTML = '';
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseBtn();
  }
}

function onEscKey(e) {
  if (e.code === 'Escape') {
    onCloseBtn();
    window.removeEventListener('keydown', onEscKey);
  }
}

refs.closeModalBtn.addEventListener('click', onCloseBtn);
refs.cardMovie.addEventListener('click', onClickCard);
refs.backdropModal.addEventListener('click', onBackdropClick);
