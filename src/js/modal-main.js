import * as API from './api';
import { createMarkupModal } from './createMarkup';
import { refs } from './refs';

async function onClickCard(e) {
  e.preventDefault();
  if (e.target.classList.contains('js-film')) {
    const currentEl = e.target;
    const movieId = currentEl.dataset.id;
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    try {
      const movieInfo = await API.getMovieById(movieId);
      const markupModal = createMarkupModal(movieInfo);

      refs.modalList.insertAdjacentHTML('beforeend', markupModal);
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
