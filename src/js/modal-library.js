import * as API from './api';
import { createMarkupModal } from './createMarkup';
import { refs } from './refs';
import { remove } from '../utils/storage';

async function onCardLibrary(e) {
  e.preventDefault();
  window.addEventListener('keydown', onEscKey);
  const elt = e.target.closest('.library__list');
  if (elt) {
    refs.btnAddWatched.textContent = 'Remove from watched';

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
      // здесь кнопки становяться с действием REMOVE поэтому вожможно нужен класс modal__btn--remove (или дата атрибут)
      //   addToWatchedBtn.addEventListener('click', addToWatched);
      //   addToQueuedBtn.addEventListener('click', addToQueue);
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

function onEscKey(e) {
  if (e.code === 'Escape') {
    onCloseBtn();
    window.removeEventListener('keydown', onEscKey);
  }
}

refs.closeModalBtn.addEventListener('click', onCloseBtn);
refs.listLibrary.addEventListener('click', onCardLibrary);
