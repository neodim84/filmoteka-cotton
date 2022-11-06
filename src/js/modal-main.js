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
    refs.btnAddWatched.setAttribute('data-id', id);
    refs.btnAddQueue.setAttribute('data-id', id);

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

  const moviesDataLibrary = load(WATCHED_KEY);

  if (moviesDataLibrary.some(item => item.id === Number(e.target.dataset.id))) {
    e.target.setAttribute('data-action', 'remove');
    refs.btnAddWatched.textContent = 'Remove from watched';
  } else {
    e.target.setAttribute('data-action', 'add');
    refs.btnAddWatched.textContent = 'Add to watched';
  }
}

async function addToWatched(e) {
  const moviesDataTrend = load(TREND_KEY);
  const moviesDataLibrary = load(WATCHED_KEY);

  const id = Number(e.target.dataset.id);
  const movieData = moviesDataTrend.find(item => item.id === id);

  if (moviesDataLibrary.every(item => item.id !== id)) {
    save(WATCHED_KEY, [...moviesDataLibrary, ...[movieData]]);
    e.target.setAttribute('data-action', 'remove');
    refs.btnAddWatched.textContent = 'Remove from watched';
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

refs.addToWatchedBtn.addEventListener('click', addToWatched);
refs.addToQueuedBtn.addEventListener('click', addToQueue);

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
