import { refs } from './refs';
import { createMarkupLibrary } from './createMarkup';

let moviesInfo = [];
let movieLibraryInfo = {};
let moviesLibraryInfo = [];

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

function onClickBtnAdd(e) {
  e.preventDefault();
  const currentEl = e.target;
  const movieId = currentEl.dataset.id;
  moviesInfo = localStorage.getItem(JSON.parse('moviesInfo'));
  movieLibraryInfo = moviesInfo.find(element => element.id === movieId);
  console.log(movieLibraryInfo);
  moviesLibraryInfo.push(movieLibraryInfo);
  console.log(moviesLibraryInfo);
}

function onClickWatched(e) {
  e.preventDefault();
  if (moviesLibraryInfo.length === 0) {
    refs.libraryList.insertAdjacentHTML('beforeend', markupFakeLibrary);
  }
  const markupLibrary = createMarkupLibrary(moviesLibraryInfo);
  refs.libraryList.insertAdjacentHTML('beforeend', markupLibrary);
}

refs.btnAddWatched.addEventListener('click', onClickBtnAdd);
console.log(refs.btnWatched);
refs.btnWatched.addEventListener('click', onClickWatched);
// массив.find((element, index, array)
// setItem(key, value) - делает новую, или обновляет уже существующую запись в хранилище.
// getItem(key) - возвращает из хранилища значение с ключом key.
