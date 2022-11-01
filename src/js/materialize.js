// DOM elements
const watchedMoviesList = document.querySelector('.watched_movies');
const queueMoviesList = document.querySelector('.queue_movies');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

export const setupUI = user => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => (item.style.display = 'block'));
    loggedOutLinks.forEach(item => (item.style.display = 'none'));
  } else {
    //   toggle user elements
    loggedInLinks.forEach(item => (item.style.display = 'none'));
    loggedOutLinks.forEach(item => (item.style.display = 'block'));
  }
};

// setup watchedMovies
export const setupWatchedMovies = data => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const watchedMovies = doc.data();
      const li = `
          <li>
            <div class="collapsible-header grey lighten-4"> ${watchedMovies.title} </div>
            <div class="collapsible-body white"> ${watchedMovies.content} </div>
          </li>
        `;
      html += li;
    });
    watchedMoviesList.innerHTML = html;
  } else {
    watchedMoviesList.innerHTML =
      '<h5 class="center-align">Login to view your Library</h5>';
  }
};

// setup queueMovies
export const setupQueueMovies = data => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const queueMovies = doc.data();
      const li = `
          <li>
            <div class="collapsible-header grey lighten-4"> ${queueMovies.title} </div>
            <div class="collapsible-body white"> ${queueMovies.content} </div>
          </li>
        `;
      html += li;
    });
    queueMoviesList.innerHTML = html;
  } else {
    queueMoviesList.innerHTML =
      '<h5 class="center-align">Login to view your Library</h5>';
  }
};

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {
  const modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  const items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});
