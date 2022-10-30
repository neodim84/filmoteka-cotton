import axios from 'axios';
// import { renderPagination } from './pagination';

// console.log(renderPagination);

const formRef = document.querySelector('.header__form');
const cardsListRef = document.querySelector('.film-gallery__list');

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const { searchQuery } = event.currentTarget;
  const query = searchQuery.value.trim().toLowerCase();
  getMoviesList(query);
  //   renderPagination(5, 20, getMoviesList, query);
});

async function getMoviesList(query) {
  try {
    const movies = await getMovies(query);
    const { results } = movies;
    // console.log(results);
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
  return hits
    .map(element => {
      //   console.log(element.original_title);
      //   console.log(element.poster_path);
      //   console.log(element.release_date.slice(0, 4));
      //   console.log(element.vote_average);
      //   console.log(element.genre_ids);
      let genres = '';
      element.genre_ids.forEach(element => {
        genres += `${element} `;
      });
      console.log(genres);
      return `<li class="film-gallery__item card">
  <a href="http://" class="link">
    <img
      class="film-gallery__img"
      src="http://image.tmdb.org/t/p/w780${element.poster_path}"
      alt="фото фільма"
    />
    <div class="film">
      <h2 class="film__title">${element.original_title}</h2>
    </div>
    <div class="film__wrapper">
      <p class="film__genre film__wrapper-reset">Drama, Action</p>
      <p class="film__line film__wrapper-reset">|</p>
      <p class="film__relise film__wrapper-reset">${element.release_date.slice(
        0,
        4
      )}</p>
      <p class="film__rating visually-hidden film__wrapper-reset">${
        element.vote_average
      }</p>
    </div>
  </a>
</li>`;
    })
    .join('');
}
