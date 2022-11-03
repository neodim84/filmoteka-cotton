import { refs } from './refs';
import * as API from './api';
import { createMarkupLibrary } from './createMarkup';

let moviesId = [];
let moviesInfo = [];
let markupAllLibrary = [];
let movieLibraryInfo = {};
let moviesLibraryInfo = [];
btnsLibrary = document.querySelector('.library__btns');

const markupFakeLibrary = `<li class="film-gallery__item card" data-id='49046'>
            <a href="http://" class="link" data-id=>
              <img
                class="film-gallery__img"
                data-id=
                src="http://image.tmdb.org/t/p/w780$/2IRjbi9cADuDMKmHdLK7LaqQDKA.jpg"
                loading='lazy'
                alt="фото фільма"
              />
              <div class="film" data-id=>
                <h2 class="film__title" data-id=>Немає значення назва</h2>
              </div>`;

function onClickWatched(e) {
  console.log('in onClickWatched');
  if (moviesLibraryInfo.length === 0) {
    refs.libraryList.insertAdjacentHTML('beforeend', markupFakeLibrary);
  }
  const markupLibrary = createMarkupLibrary(moviesLibraryInfo);
  refs.libraryList.insertAdjacentHTML('beforeend', markupLibrary);
}

refs.btnWatched.addEventListener('click', onClickWatched);
