import * as API from './api';
import { createMarkupModal } from './createMarkup';
import { refs } from './refs';
import { save, load } from '../utils/storage';
// import AddToDataBtn from './addToDataBtn';

// const addToWatchedBtn = new AddToDataBtn({
//   selector: '[data-action="add_to_watched"]',
//   hidden: false,
// });
// const addToQueuedBtn = new AddToDataBtn({
//   selector: '[data-action="add_to_queue"]',
//   hidden: false,
// });

const addToWatchedBtn = document.querySelector('.modal__btn--watched');

const addToQueuedBtn = document.querySelector('.modal__btn--queue');

console.log(addToWatchedBtn);

const TREND_KEY = 'trend';
const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

let watched = [];
async function onClickCard(e) {
  window.addEventListener('keydown', onEscKey);

  const { id } = e.target.dataset;
  const idNum = Number(id);
  const trend = load(TREND_KEY);


  //   const savedWatched = localStorage.getItem(WATCHED_KEY);
  //   const parsedWatched = JSON.parse(savedWatched);

  if (load(WATCHED_KEY)) {
    watched = [...load(WATCHED_KEY)];
  }

  const addToWatched = () => {
    if (!load(WATCHED_KEY)) {
      watched.push(trend.find(item => item.id === idNum));
      return save(WATCHED_KEY, watched);
    }
    watched = load(WATCHED_KEY);
    //    prevState.todos.filter(todo => todo.id !== todoId),
    const some = watched.some(item => item.id !== idNum);
    //     watched.forEach(element => {
    //       if (element.id !== idNum) {
    //         watched.push(trend.find(item => item.id === idNum));
    //       }
    //     });
  };

  const addToQueue = () => {
    console.log('addtoqueue button +');
    //       save(WATCHED_KEY, watched);
  };

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
      addToWatchedBtn.addEventListener('click', addToWatched);
      addToQueuedBtn.addEventListener('click', addToQueue);
    } catch (error) {
      console.log(error.message);
    }
  }
}

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
