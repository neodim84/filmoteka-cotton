import * as API from './api';
import { createMarkupModal } from './createMarkup';
import { refs } from './refs';
import { save } from '../utils/storage';

const WATCHED_KEY = 'watched';

const addToWatchedBtn = document.querySelector('.modal__btn--watched');

const watched = [];

async function onClickCard(e) {
  const { id } = e.target.dataset;
  console.log('watched', watched);
  function addToWatch() {
    console.log('id inside onClick', id);
    //     save(WATCHED_KEY, id);
    watched.push(id);
    //     watched.push(id);
    localStorage.setItem(WATCHED_KEY, JSON.stringify(watched));
  }
  if (e.target.classList.contains('js-film')) {
    const currentEl = e.target;
    const movieId = currentEl.dataset.id;
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    try {
      const movieInfo = await API.getMovieById(movieId);
      const markupModal = createMarkupModal(movieInfo);
      refs.modalList.insertAdjacentHTML('beforeend', markupModal);
      addToWatchedBtn.addEventListener('click', addToWatch);
    } catch (error) {
      console.log(error);
    }
  }
}

function onCloseBtn() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
  refs.modalList.innerHTML = '';
}

refs.closeModalBtn.addEventListener('click', onCloseBtn);
refs.cardMovie.addEventListener('click', onClickCard);
