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

function onClickQueue() {
  const moviesQueue = load('queue');

  if (moviesQueue.length !== 0) {
    refs.titleLibrary.classList.add('visually-hidden');
    refs.listLibrary.innerHTML = '';
    const markupQueue = createMarkupLibrary(moviesQueue);
    refs.listLibrary.insertAdjacentHTML('beforeend', markupQueue);
  } else {
    refs.titleLibrary.classList.remove('visually-hidden');
    refs.listLibrary.innerHTML = `<li class="film-gallery__item card">
                    <a class="library__link link">
                        <img class="film-gallery__img library__link"
                            src="http://image.tmdb.org/t/p/w780/438QXt1E3WJWb3PqNniK0tAE5c1.jpg" loading='lazy'
                            alt="фото фільма" />
                    </a>
                </li>`;
  }
}

refs.btnWatched.addEventListener('click', onClickWatched);
refs.btnQueue.addEventListener('click', onClickQueue);
