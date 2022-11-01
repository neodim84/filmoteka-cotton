import axios from 'axios';
import Pagination from 'tui-pagination';
import genres from '../json/genres.json';
import { genreTitle } from './genresSelect';
import { container, instance } from './pagination';
import { spinnerStart, spinnerStop } from './spinner';

const formRef = document.querySelector('.header__form');
const cardsListRef = document.querySelector('.film-gallery__list');
const notifRef = document.querySelector('.header__notif');

let query = '';
let page = 1;
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const { searchQuery } = event.currentTarget;
  const newQuery = searchQuery.value.trim().toLowerCase();
  if (query !== newQuery) {
    query = newQuery;
  }
  getMoviesList(query);
});
container.addEventListener('click', handleTui);

function handleTui() {
  page = instance.getCurrentPage();
  // console.log(instance.getCurrentPage());
  if (query !== '') {
    getMoviesList(query);
  }
}

async function getMoviesList(query) {
  try {
    const movies = await getMoviesAPI(query, page);
    instance.setTotalItems(movies.total_results);
    spinnerStart();
    const { results } = movies;
    localStorage.setItem('currentPage', JSON.stringify(results));
    notification(results.length);
    const markup = createMarkup(results);
    cardsListRef.innerHTML = markup;
    spinnerStop();
  } catch (error) {
    spinnerStop();
    console.log(error);
  }
}

async function getMoviesAPI(query, page) {
  const { data } = await axios.get(
    `/search/movie?api_key=e1d2d59faab8416a91a95646b10aa32e&language=en-US&page=1&include_adult=false&query=${query}&page=${page}`
  );
  console.log(data);
  return data;
}

function notification(length) {
  if (length == 0) {
    notifRef.classList.add('header__notif--visible');
    const timerId = setTimeout(() => {
      notifRef.classList.remove('header__notif--visible');
    }, 3000);
  }
}

export function createMarkup(hits) {
  // notification(hits.length);
  return hits
    .map(element => {
      const genreId = element.genre_ids;
      let genresText = genreTitle(genreId, genres);
      if (genresText === '') {
        genresText = 'no genres';
      }
      let releaseDate = 'no info';
      if (element.release_date != undefined) {
        releaseDate = element.release_date.slice(0, 4);
      }
      let image = 'https://picsum.photos/200';
      if (element.poster_path !== null) {
        image = `http://image.tmdb.org/t/p/w780${element.poster_path}`;
      }
      let title = 'no title';
      if (element.original_title !== undefined) {
        title = element.original_title;
      }
      let rating = 'no rating';
      if (element.vote_average !== undefined) {
        rating = element.vote_average;
      }

      const elementId = element.id;
      return `<li class="film-gallery__item card js-film" data-id=${elementId}>
        <a href="http://" class="link js-film" data-id=${elementId}>
          <img
            class="film-gallery__img js-film"
            data-id=${elementId}
            src="${image}"
            alt="фото фільма"
          />
          <div class="film js-film" data-id=${elementId}>
            <h2 class="film__title js-film" data-id=${elementId}>${title}</h2>
          </div>
          <div class="film__wrapper js-film" data-id=${elementId}>
            <p class="film__genre film__wrapper-reset js-film" data-id=${elementId}>${genresText}</p>
            <p class="film__line film__wrapper-reset js-film" data-id=${elementId}>|</p>
            <p class="film__relise film__wrapper-reset js-film" data-id=${elementId}>${releaseDate}</p>
            <p class="film__rating visually-hidden film__wrapper-reset js-film" data-id=${elementId}>${element.vote_average}</p>
          </div>
        </a>
      </li>`;
    })
    .join('');
}
