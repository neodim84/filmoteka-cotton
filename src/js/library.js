import { load } from '../utils/storage';
import { refs } from './refs';
import { createMarkupLibrary } from './createMarkup';

function onClickWatched() {
  const moviesWatched = load('watched');

  if (moviesWatched.length !== 0) {
    refs.titleLibrary.classList.add('visually-hidden');
    refs.listLibrary.innerHTML = '';
    const markupLibrary = createMarkupLibrary(moviesWatched);
    refs.listLibrary.insertAdjacentHTML('beforeend', markupLibrary);
  }
}

refs.btnWatched.addEventListener('click', onClickWatched);
