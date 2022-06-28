import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. find a nice recipe and bookmark it ;)';
  _message = '';

  //generate search results and display in the result view
  _generateMarkup() {
    return `
        ${this._data
          .map(bookmark => previewView.render(bookmark, false))
          .join('')}  
      `;
  }
}

export default new BookmarksView();
