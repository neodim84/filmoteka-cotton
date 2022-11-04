import * as API from './api';
import { createMarkupModal } from './createMarkup';
import { refs } from './refs';
import { remove } from '../utils/storage';

console.log('in onCardLibrary');

function onCardLibrary(e) {
  e.preventDefault();
  console.log('in onCardLibrary');
}

refs.listLibrary.addEventListener('click', onCardLibrary);
