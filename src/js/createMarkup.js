import { genreTitle } from './genresSelect';
import genres from '../json/genres.json';

export const markupGallery = async results => {
  return results
    .map(
      item =>
        `<li class="film-gallery__item card">
            <a href="http://" class="link">
              <img
                class="film-gallery__img"
                src="http://image.tmdb.org/t/p/w780${item.poster_path}"
                loading='lazy'
                alt="фото фільма"
              />
              <div class="film">
                <h2 class="film__title">${item.title}</h2>
              </div>
              <div class="film__wrapper">
                <p class="film__genre film__wrapper-reset">${genreTitle(
                  item.genre_ids,
                  genres
                )}</p>
                <p class="film__line film__wrapper-reset">|</p>
                <p class="film__relise film__wrapper-reset">${item.release_date.slice(
                  0,
                  4
                )}</p>
                  <p class="film__rating visually-hidden film__wrapper-reset">
                    ${item.vote_average}
                  </p>
              </div>
            </a>
          </li>`
    )
    .join('');
};

// ===============================================

export function createMarkupModal({
  genres,
  original_title,
  popularity,
  poster_path,
  vote_average,
  overview,
  title,
}) {
  let imgUrl = 'https://picsum.photos/200/300';
  if (poster_path !== null) {
    imgUrl = `http://image.tmdb.org/t/p/w780/${poster_path}`;
  }
  let genre = genres.map(item => item.name).join(', ');
  if (genres.length === 0) {
    genre = 'Unknown';
  }
  if (overview === '') {
    overview = 'Description coming soon...';
  }
  return `
          <div class="modal__poster__holder">
            <img class="modal__poster" src=${imgUrl} alt="" width="240" />
          </div>
            <div class="modal__info">
              <h2 class="modal__title">${title}</h2>
              <table class="modal__table">
                <tr>
                  <td>Vote / Votes</td>
                  <td class="modal__table--vote">${vote_average}</td>
                </tr>
                <tr>
                  <td>Popularity</td>
                  <td class="modal__table--popularity">${popularity.toFixed(
                    1
                  )}</td>
                </tr>
                <tr>
                  <td>Original Title</td>
                  <td class="modal__table--originalTitle">${original_title}</td>
                </tr>
                <tr>
                  <td>Genre</td>
                  <td class="modal__table--genre">${genre}</td>
                </tr>
              </table>
              <h3>ABOUT</h3>
              <p class="modal__text--about">${overview}</p>
              <div class="modal__holder__btn"><button type="submit" class="modal__btn--watched modal__btn">add to Watched</button>
              <button type="submit" class="modal__btn--queue modal__btn">Add to queue</button></div>
              </div>`;
}
