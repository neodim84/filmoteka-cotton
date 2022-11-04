import { load } from '../utils/storage';
import { refs } from './refs';
import { createMarkupLibrary } from './createMarkup';

console.log(refs.btnWatched);

function onClickWatched() {
  console.log('in onClickWatched');

  const moviesWatched = load('watched');
  console.log(moviesWatched);
  console.log(moviesWatched.length);
  console.log(refs.titleLibrary);
  if (moviesWatched.length !== 0) {
    refs.titleLibrary.classList.add('visually-hidden');
    refs.listLibrary.innerHTML = '';
    const markupLibrary = createMarkupLibrary(moviesWatched);
    refs.listLibrary.insertAdjacentHTML('beforeend', markupLibrary);
  }
}

refs.btnWatched.addEventListener('click', onClickWatched);
