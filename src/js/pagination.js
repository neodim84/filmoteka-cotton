// const listElement = document.querySelector('.js-card');
// const paginationElement = document.getElementById('pagination');
// const arrowLeft = document.querySelector('.arrow-left');
// const arrowRight = document.querySelector('.arrow-right');
// const warningField = document.querySelector('.header-warning');
// let currentPage = 1;
// let pageCount;
// const pagesOnWindow = 5;
// let rows = 20;

// function resetCurrentPage() {
//   currentPage = 1;
// }

// // главная функция для рендера pagination. Callback-функция для работы с fetch (зависит от раздела, где рисуем pagination)
// export function renderPagination(totalPages, listItems, callback, searchQuery) {
//   paginationElement.innerHTML = '';
//   resetCurrentPage();
//   arrowLeft.removeEventListener('click', onArrowLeftClick);
//   arrowRight.removeEventListener('click', onArrowRightClick);

//   function setupPagination(items, wrapper, rowsPerPage) {
//     wrapper.innerHTML = '';

//     pageCount = totalPages;
//     let maxLeftPage = currentPage - Math.floor(pagesOnWindow / 2);
//     let maxRightPage = currentPage + Math.floor(pagesOnWindow / 2);

//     if (maxLeftPage < 1) {
//       maxLeftPage = 1;
//       maxRightPage = pagesOnWindow;
//     }

//     if (maxRightPage > totalPages) {
//       maxLeftPage = totalPages - (pagesOnWindow - 1);

//       if (maxLeftPage < 1) {
//         maxLeftPage = 1;
//       }
//       maxRightPage = totalPages;
//     }

//     for (let i = 1; i <= totalPages; i++) {
//       if (maxLeftPage !== 1 && i == 1) {
//         let btn = paginationButton(i, items);
//         wrapper.appendChild(btn);
//       }

//       if (maxRightPage !== totalPages && i == totalPages) {
//         let btn = paginationButton(i, items);
//         wrapper.appendChild(btn);
//       }

//       if (i >= maxLeftPage && i <= maxRightPage) {
//         let btn = paginationButton(i, items);
//         wrapper.appendChild(btn);
//       }

//       // добавляет троеточие в pagination в зависимости от текущей страницы и общего к-ва страниц
//       if (
//         totalPages >= 6 &&
//         i == 1 &&
//         currentPage !== 1 &&
//         currentPage !== 2 &&
//         currentPage !== 3
//       ) {
//         const threeDotsEl = addThreeDotsBlock();
//         wrapper.insertBefore(threeDotsEl, wrapper[wrapper.length - 2]);
//       }

//       if (
//         pageCount >= 7 &&
//         i == pageCount - 1 &&
//         currentPage !== pageCount &&
//         currentPage !== pageCount - 2 &&
//         currentPage !== pageCount - 1
//       ) {
//         const threeDotsEl = addThreeDotsBlock();
//         wrapper.insertBefore(threeDotsEl, wrapper[1]);
//       }
//     }
//   }

//   // создает троеточия для pagination
//   function addThreeDotsBlock() {
//     const threeDots = document.createElement('div');
//     threeDots.classList.add('threedots');
//     threeDots.innerText = '...';
//     return threeDots;
//   }

//   function paginationButton(page, items) {
//     let button = document.createElement('button');
//     button.innerText = page;

//     if (currentPage == page) button.classList.add('active');

//     button.addEventListener('click', function () {
//       warningField.textContent = ``;
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//       currentPage = page;
//       callback(listElement, currentPage, searchQuery);

//       let current_btn = document.querySelector('.pagenumbers button.active');
//       current_btn.classList.remove('active');

//       button.classList.add('active');
//       setupPagination(listItems, paginationElement, rows);
//     });

//     return button;
//   }

//   // функция для отслеживания кликов по стрелке влево
//   function onArrowLeftClick() {
//     if (currentPage > 1) {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//       currentPage--;
//       setupPagination(listItems, paginationElement, rows);
//       callback(listElement, currentPage, searchQuery);
//     }

//     disableArrowBtn(totalPages);
//   }

//   // функция для отслеживания кликов по стрелке вправо
//   function onArrowRightClick() {
//     if (currentPage < totalPages) {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//       currentPage++;
//       setupPagination(listItems, paginationElement, rows);
//       callback(listElement, currentPage, searchQuery);
//     }
//     disableArrowBtn(totalPages);
//   }

//   setupPagination(listItems, paginationElement, rows);
//   arrowLeft.onclick = onArrowLeftClick;
//   arrowRight.onclick = onArrowRightClick;

//   disableArrowBtn(totalPages);
// }

// paginationElement.addEventListener('click', disableArrowBtnAfterPageClick);

// function disableArrowBtnAfterPageClick(evt) {
//   if (evt.target.tagName != 'BUTTON') {
//     return;
//   } else {
//     disableArrowBtn(pageCount);
//   }
// }

// // делает неактивными кнопки-стрелки на первой и последней  странице
// function disableArrowBtn(totalPages) {
//   if (currentPage === 1) {
//     arrowLeft.classList.add('disabled-arrow');
//   } else {
//     arrowLeft.classList.remove('disabled-arrow');
//   }

//   if (currentPage === totalPages) {
//     arrowRight.classList.add('disabled-arrow');
//   } else {
//     arrowRight.classList.remove('disabled-arrow');
//   }
// }
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const container = document.getElementById('pagination');
const options = {
  totalItems: 20,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);
