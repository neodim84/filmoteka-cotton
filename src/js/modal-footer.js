const studentsModalBtn = document.querySelector('.students-modal');
const modalWindow = document.querySelector('.backdrop');
const modalClose = document.querySelector('.button-modal');


studentsModalBtn.addEventListener('click', onModalOpen);
modalClose.addEventListener('click', onModalClose);


function onModalOpen(e) {
    modalWindow.classList.remove('is-hidden');
} 

function onModalClose(e) {
    modalWindow.classList.add('is-hidden');
} 
   




function onKeyPress(e) {
  if (e.code === 'Escape') {
    onModalClose();
  }
}