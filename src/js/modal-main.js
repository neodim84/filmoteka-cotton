import * as API from './api';
import { createMarkupModal } from './createMarkup';
import { refs } from './refs';
import { save, load } from '../utils/storage';

const TREND_KEY = 'trend';
const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

async function onClickCard(e) {
  window.addEventListener('keydown', onEscKey);

  e.preventDefault();
  const element = e.target.closest('.film-gallery__list');

  if (element) {
    const id = e.target.dataset.id;
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.btnAddToWatched.setAttribute('data-id', id);
    refs.btnAddToQueue.setAttribute('data-id', id);

    try {
      const movieInfo = await API.getMovieById(id);
      const markupModal = createMarkupModal(movieInfo);
      refs.modalList.insertAdjacentHTML('beforeend', markupModal);
    } catch (error) {
      console.log(error.message);
    }
  }

  if (!load(WATCHED_KEY)) {
    save(WATCHED_KEY, []);
  }

  if (!load(QUEUE_KEY)) {
    save(QUEUE_KEY, []);
  }

  const moviesDataLibrary = load(WATCHED_KEY);
  const moviesDataQueue = load(QUEUE_KEY);

  if (moviesDataLibrary.some(item => item.id === Number(e.target.dataset.id))) {
    refs.btnAddToWatched.setAttribute('data-action', 'remove');
    refs.btnAddToWatched.textContent = 'Remove from watched';
  }

  if (
    moviesDataLibrary.every(item => item.id !== Number(e.target.dataset.id))
  ) {
    refs.btnAddToWatched.setAttribute('data-action', 'add');
    refs.btnAddToWatched.textContent = 'Add to watched';
  }

  if (moviesDataQueue.some(item => item.id === Number(e.target.dataset.id))) {
    refs.btnAddToQueue.setAttribute('data-action', 'remove');
    refs.btnAddToQueue.textContent = 'Remove from queue';
  }

  if (moviesDataQueue.every(item => item.id !== Number(e.target.dataset.id))) {
    refs.btnAddToQueue.setAttribute('data-action', 'add');
    refs.btnAddToQueue.textContent = 'Add to queue';
  }
}

async function addToWatched(e) {
  const moviesDataTrend = load(TREND_KEY);
  const moviesDataLibrary = load(WATCHED_KEY);

  const id = Number(e.target.dataset.id);
  const movieData = moviesDataTrend.find(item => item.id === id);

  if (moviesDataLibrary.every(item => item.id !== id)) {
    save(WATCHED_KEY, [...moviesDataLibrary, movieData]);
    refs.btnAddToWatched.setAttribute('data-action', 'remove');
    refs.btnAddToWatched.textContent = 'Remove from watched';
  }

  if (moviesDataLibrary.some(item => item.id === id)) {
    const index = moviesDataLibrary.findIndex(item => item.id === id);
    moviesDataLibrary.splice(index, 1);
    save(WATCHED_KEY, moviesDataLibrary);
    refs.btnAddToWatched.setAttribute('data-action', 'add');
    refs.btnAddToWatched.textContent = 'Add to watched';
  }
}

async function addToQueue(e) {
  const moviesDataTrend = load(TREND_KEY);
  const moviesDataQueue = load(QUEUE_KEY);

  const id = Number(e.target.dataset.id);
  const movieData = moviesDataTrend.find(item => item.id === id);

  if (moviesDataQueue.every(item => item.id !== id)) {
    save(QUEUE_KEY, [...moviesDataQueue, movieData]);
    refs.btnAddToQueue.setAttribute('data-action', 'remove');
    refs.btnAddToQueue.textContent = 'Remove from queue';
  }

  if (moviesDataQueue.some(item => item.id === id)) {
    const index = moviesDataQueue.findIndex(item => item.id === id);
    moviesDataQueue.splice(index, 1);
    save(QUEUE_KEY, moviesDataQueue);
    refs.btnAddToQueue.setAttribute('data-action', 'add');
    refs.btnAddToQueue.textContent = 'Add to queue';
  }
}

refs.btnAddToWatched.addEventListener('click', addToWatched);
refs.btnAddToQueue.addEventListener('click', addToQueue);

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
