import team from '../json/team.json';
import { teamMarkUp } from './createTeamMarkup';

const studentsModalBtn = document.querySelector('.students-modal');
const modalWindow = document.querySelector('.backdrop-footer');
const modalClose = document.querySelector('.team-modal__close-btn');
const teamList = document.querySelector('.team__list');

studentsModalBtn.addEventListener('click', onModalOpen);
modalClose.addEventListener('click', onModalClose);

function onModalOpen(e) {
  e.preventDefault();
  //   teamList.innerHTML = '';
  //   teamList.innerHTML = teamMarkUp(team);
  modalWindow.classList.remove('is-hidden');

  document.addEventListener('keydown', onKeyPress);
  function onKeyPress(e) {
    if (e.code === 'Escape') {
      onModalClose();
      document.removeEventListener('keydown', onKeyPress);
    }
  }
}

function onModalClose(e) {
  modalWindow.classList.add('is-hidden');
}

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
