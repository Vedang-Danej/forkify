import icons from 'url:../../img/icons.svg';
import View from './view.js';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const pageGoTo = +btn.dataset.goto;
      // console.log(pageGoTo);
      // console.log(btn);
      handler(pageGoTo);
    });
  }
  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // console.log(numPages);

    //   on page 1 and  other pages
    if (currentPage === 1 && numPages > 1) {
      return `
      <button data-goto="${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    // on last page
    if (currentPage === numPages && numPages > 1) {
      return `
      <button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
      `;
    }

    // on any other page
    if (currentPage < numPages) {
      return `
      <button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
          <button data-goto="${
            currentPage + 1
          }" class="btn--inline pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>

      `;
    }
    // on page 1 and no other pages
  }
}
export default new PaginationView();
