import * as API from './api';
import { createMarkupModal } from './createMarkup';
import { refs } from './refs';
import { save, load } from '../utils/storage';
// import AddToDataBtn from './addToDataBtn';

// const addToWatchedBtn = new AddToDataBtn({
//   selector: '[data-action="add_to_watched"]',
//   hidden: false,
// });
// const addToQueuedBtn = new AddToDataBtn({
//   selector: '[data-action="add_to_queue"]',
//   hidden: false,
// });

const addToWatchedBtn = document.querySelector('.modal__btn--watched');

const addToQueuedBtn = document.querySelector('.modal__btn--queue');

const TREND_KEY = 'trend';
const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

let watched = [];

async function onClickCard(e) {
  const { id } = e.target.dataset;
  const idNum = Number(id);
  const trend = load(TREND_KEY);

  const addToWatched = () => {
    if (!load(WATCHED_KEY)) {
      watched.push(trend.find(item => item.id === idNum));
      return save(WATCHED_KEY, watched);
    }
    const some = watched.some(item => item.id === idNum);
    if (some) {
      console.log('Этот фильм уже в списке');
    }

    //     if (!load(WATCHED_KEY)) {
    // //       watched.push(trend.find(item => item.id === idNum));
    //       console.log(watched);
    // //       return;
    //       //       return save(WATCHED_KEY, watched);
    //     }
    //     console.log(watched);
    //     save(WATCHED_KEY, watched);
  };

  const addToQueue = () => {
    console.log('addtoqueue button +');
    //       save(WATCHED_KEY, watched);
  };

  if (e.target.classList.contains('js-film')) {
    const currentEl = e.target;
    const movieId = currentEl.dataset.id;
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    try {
      const movieInfo = await API.getMovieById(movieId);
      const markupModal = createMarkupModal(movieInfo);
      refs.modalList.insertAdjacentHTML('beforeend', markupModal);
      addToWatchedBtn.addEventListener('click', addToWatched);
      addToQueuedBtn.addEventListener('click', addToQueue);
    } catch (error) {
      console.log(error);
    }
  }
}

function onCloseBtn() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
  refs.modalList.innerHTML = '';
}

refs.closeModalBtn.addEventListener('click', onCloseBtn);
refs.cardMovie.addEventListener('click', onClickCard);
