import { load } from '../utils/storage';
import { refs } from './refs';
import { createMarkupLibrary } from './createMarkup';
import { watched } from './modal-main';

console.log('in onClickWatched');
function onClickWatched() {
  console.log('in onClickWatched');
  const moviesWatched = load('trend');
  console.log(moviesWatched);
  console.log(moviesWatched.length);

  if (moviesWatched.length !== 0) {
    refs.titleLibrary.classList.add('visually-hidden');
    refs.listLibrary.innerHTML = '';
    const markupLibrary = createMarkupLibrary(moviesWatched);
    refs.listLibrary.insertAdjacentHTML('beforeend', markupLibrary);
  }
}

refs.btnWatched.addEventListener('click', onClickWatched);
