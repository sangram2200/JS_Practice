import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

//parcel syntax
// if (module.hot) {
//   module.hot.accept();
// }

//controller for recipe view
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // 1) loading the recipe
    await model.loadRecipe(id);

    //2) rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

//controller for search results
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    //1) get search query
    const query = searchView.getQuery();
    if (!query) return;

    //2) load query results
    await model.loadSearchResults(query);

    //3) render results
    resultsView.render(model.getSearchResultsPage());

    //4) Render the initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

//controller for pagination
const controlPagination = function (goToPage) {
  //3) render new results
  resultsView.render(model.getSearchResultsPage(goToPage));

  //4) Render the new  pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //update the recipe servings in state
  model.updateServings(newServings);

  //update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  //Add or remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //update recipe view for bookmark
  recipeView.update(model.state.recipe);

  //Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

//initiate functions excecuted at the start of program
const init = function () {
  //handler for recipe view
  recipeView.addHandlerRender(controlRecipes);

  //handler for servings
  recipeView.addHandlerUpdateServings(controlServings);

  //handler for bookmark
  recipeView.addHandlerAddBookmark(controlAddBookmark);

  //handler for search view
  searchView.addHandlerSearch(controlSearchResults);

  //handler for pagination
  paginationView.addHandlerClick(controlPagination);
};

init();
