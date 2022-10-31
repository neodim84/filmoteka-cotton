const spinnerRef = document.querySelector('.backdrop-loader');

var _ = require('lodash.debounce');

export const spinnerStart = function () {
  spinnerRef.classList.remove('is-hidden');
};

export const spinnerStop = _(() => {
  spinnerRef.classList.add('is-hidden');
}, 1000);

// 1. import { spinnerStart, spinnerStop } from './spinner';
// 2. spinnerStart(); - spinner is visible;
// 3. spinnerStop() - spinner is hidden (debounce 1000ms);
