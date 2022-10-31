import axios from 'axios';
import genres from '../json/genres.json';
import { genreTitle } from './genresSelect';

const formRef = document.querySelector('.header__form');
const cardsListRef = document.querySelector('.film-gallery__list');
const notifRef = document.querySelector('.header__notif');

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const { searchQuery } = event.currentTarget;
  const query = searchQuery.value.trim().toLowerCase();
  getMoviesList(query);
});

async function getMoviesList(query) {
  try {
    const movies = await getMovies(query);
    const { results } = movies;
    localStorage.setItem('currentPage', JSON.stringify(results));
    const markup = createMarkup(results);
    cardsListRef.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
}

async function getMovies(query) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=e1d2d59faab8416a91a95646b10aa32e&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return data;
}

export function createMarkup(hits) {
  if (hits.length == 0) {
    notifRef.classList.add('header__notif--visible');
    const timerId = setTimeout(() => {
      notifRef.classList.remove('header__notif--visible');
    }, 3000);
  }

  return hits
    .map(element => {
      const genreId = element.genre_ids;
      const genresText = genreTitle(genreId, genres);
      let image = 'https://picsum.photos/200';

      if (element.poster_path !== null) {
        image = `http://image.tmdb.org/t/p/w780${element.poster_path}`;
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
            <h2 class="film__title js-film" data-id=${elementId}>${
        element.original_title
      }</h2>
          </div>
          <div class="film__wrapper js-film" data-id=${elementId}>
            <p class="film__genre film__wrapper-reset js-film" data-id=${elementId}>${genresText}</p>
            <p class="film__line film__wrapper-reset js-film" data-id=${elementId}>|</p>
            <p class="film__relise film__wrapper-reset js-film" data-id=${elementId}>${element.release_date.slice(
        0,
        4
      )}</p>
            <p class="film__rating visually-hidden film__wrapper-reset js-film" data-id=${elementId}>${
        element.vote_average
      }</p>
          </div>
        </a>
      </li>`;
    })
    .join('');
}
