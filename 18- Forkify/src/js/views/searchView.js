class SearchView {
  _parentEl = document.querySelector('.search');

  //get query value from the search field
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  //clear search field after searching
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  //event handler for on submit of search query
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
