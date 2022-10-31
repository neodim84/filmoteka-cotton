


const openLink = () => {
  window.addEventListener('keydown', onKeyPress);
  backdropStEl.classList.remove('is-hidden');
};

const closeModalStud = () => {
  backdropStEl.classList.add('is-hidden');
  window.removeEventListener('keydown', onKeyPress);
};

linkToDev.addEventListener('click', openLink);
closeModalBtn.addEventListener('click', closeModalStud);
backdropStEl.addEventListener('click', onBackdropClick);

function onKeyPress(event) {
  if (event.code === 'Escape') {
    closeModalStud();
  }
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModalStud();
  }
}
