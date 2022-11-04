import { refs } from './refs';
import { createMarkupLibrary } from './createMarkup';

console.log('in onClickWatched');
function onClickWatched() {
  console.log('in onClickWatched');

  const moviesWatched = localStorage.getItem(WATCHED_KEY);
  const parsedMoviesWatched = JSON.parse(moviesWatched);
  if (!parsedMoviesWatched.length === 0) {
    refs.libraryTitle.classList.add('visually-hidden');
    refs.libraryList.innerHTML = '';
    const markupLibrary = createMarkupLibrary(parsedMoviesWatched);
    refs.libraryList.insertAdjacentHTML('beforeend', markupLibrary);
  }
}

refs.btnLibraryWatched.addEventListener('click', onClickWatched);
