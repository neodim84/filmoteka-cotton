import team from '../json/team.json';
import { teamMarkUp } from './createTeamMarkup';
import { refs } from './refs';

function onModalOpen(e) {
  e.preventDefault();
  //   teamList.innerHTML = '';
  //   teamList.innerHTML = teamMarkUp(team);
  refs.modalWindow.classList.remove('is-hidden');

  window.addEventListener('keydown', onKeyPress);
}

function onModalClose() {
  refs.modalWindow.classList.add('is-hidden');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseBtn();
  }
}

function onKeyPress(e) {
  if (e.code === 'Escape') {
    onModalClose();
    window.removeEventListener('keydown', onKeyPress);
  }
}

refs.modalWindow.addEventListener('click', onModalClose);
refs.studentsModalBtn.addEventListener('click', onModalOpen);
refs.modalWindow.addEventListener('click', onBackdropClick);

  




// const studentsModalBtn = document.querySelector('.students-modal');
// const modalWindow = document.querySelector('.backdrop');
// const modalClose = document.querySelector('.button-modal');

// studentsModalBtn.addEventListener('click', onModalOpen);
// modalClose.addEventListener('click', onModalClose);

// function onModalOpen(e) {
//   modalWindow.classList.remove('is-hidden');
// }

// function onModalClose(e) {
//   modalWindow.classList.add('is-hidden');
// }

// function onKeyPress(e) {
//   if (e.code === 'Escape') {
//     onModalClose();
//   }
// }
