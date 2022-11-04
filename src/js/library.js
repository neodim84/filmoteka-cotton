import { refs } from './refs';
import { createMarkupLibrary } from './createMarkup';

function onClickWatched() {
  // console.log('in onClickWatched');

  const moviesLibrary = localStorage.getItem('moviesLibrary');
  const parsedMoviesLibrary = JSON.parse(moviesLibrary);
  if (!parsedMoviesLibrary.length === 0) {
    refs.libraryTitle.classList.add('visually-hidden');
    refs.libraryList.innerHTML = '';
    const markupLibrary = createMarkupLibrary(parsedMoviesLibrary);
    refs.libraryList.insertAdjacentHTML('beforeend', markupLibrary);
  }
}

refs.btnLibraryWatched.addEventListener('click', onClickWatched);
