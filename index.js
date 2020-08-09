'use strict';

import {appView} from './appView.js'; 
import {bookMarkListing} from './bookmarkListing.js';
import {getBookmarks, apiStoreBookmarks, deleteBookmarks, apiStore} from './api.js'; 
import {createBookMarkTemplate} from './createNewBookmark.js'; 
import {generateDescription} from './expandedBookmarkView.js';


const store = {
  totalBookmarks: [],
  bookmarks: [],
  adding: false,
  error: null,
  filter: 0,
  activeBookmark: -1
};


function loadApp() {
  $(document).find('#app').html(appView);
}
$(loadApp);

function loadBookMarkListing() {
  $('#main-content').html(bookMarkListing);
  getBookmarks().then(responseJson => {
    if (typeof responseJson == 'undefined' || responseJson.length == 0) {
      return;
    }

    store.bookmarks = responseJson;
    store.totalBookmarks = responseJson;
    displayBookmarks();
  }) .catch(err => {
    $("#js-error-message").text(`Something went wrong: ${err.message}`);
  });
}
$(loadBookMarkListing);

$(document).on('click', '#cancelAddBookmark', function() {
  loadBookMarkListing();
});

function validateInput() {
  if (!apiStore.url
    || apiStore.url.length == 0
  ){
    return {error: true, message: 'Url is required'};
  }

  if (!apiStore.title 
    || apiStore.title.length == 0
  ) {
    return {error: true, message: 'Title is required'};
  }
    
  return {error: false};;
}

$(document).on('submit', "#addBookmark", function(event){
  event.preventDefault();

  apiStore.title = $('input[name="title"]').val();
  apiStore.url = $('input[name="url"]').val();
  apiStore.description = $('textarea[name="bookmark_desc"]').val();

  
  //apiStore.description = $(document).find('#bookmark-des').text();
  apiStore.rating = 0;

  $('.give-rating-star').each(function(index, star){
    if ($(star).data('selected') == 1) {
      apiStore.rating++;
    }
  });

  const validationResponse = validateInput();
  if (validationResponse['error']) {
    const errorContainer = $('#create-bookmark-error');
    errorContainer.html(validationResponse['message']);
    errorContainer.show();
    return;
  }

  apiStoreBookmarks().then(data => {
    if (!data || typeof data == 'undefined') {
      return;
    }
    loadBookMarkListing()
  }) .catch(err => {
    $("#js-error-message").text(`Something went wrong: ${err.message}`);
  });
});

$(document).on('click', '.give-rating-star', function(){
  const numberOfStar = $(this).data('number');

  let html = '';
  let starCount = 1;
  for (let i=0; i<numberOfStar; i++) {
    html = html + '<i class="pointer give-rating-star fa fa-star p-l-1" data-selected="1" data-number="'+starCount+'" aria-hidden="true"></i>';
    starCount++;
  }

  const remainingRating = 5 - numberOfStar;
  if (remainingRating != 0) {
    for (let i=0; i<remainingRating; i++) {
      html = html + '<i class="pointer give-rating-star fa fa-star-o p-l-1" data-selected="0" data-number="'+starCount+'" aria-hidden="true"></i>';
      starCount++;
    }
  }

  $('#give-rating-star-container').html(html);
});













/*TODO Filter statement conditional for query*/

function displayBookmarks() {
  let bookmarkHtml = store.bookmarks.map(function(res, index){
      let html = `<section><section data-key="${index}" class="bookmark-row w-50 m-t-2 border m-auto p-2 flex space-between">
      <span>${res.title}</span>
      <span>`;

      for (let i=0; i<res.rating; i++) {
        html = html + '<i class="fa fa-star p-l-1" aria-hidden="true"></i>';
      }

      const remainingRating = 5 - res.rating;
      if (remainingRating != 0) {
        for (let i=0; i<remainingRating; i++) {
          html = html + '<i class="fa fa-star-o p-l-1" aria-hidden="true"></i>';
        }
      }
        
      html = html + '</span></section><div class="bookmark-row-description"></div></section>';
      return html;
  });
  $('#bookmark-row-container').html(bookmarkHtml);
}

$(document).on('click', '.bookmark-row', function() {
  $('.bookmark-row-description').html('');

  const key = $(this).data('key');
  store.activeBookmark = key;
  $(this).parent().find('.bookmark-row-description').html(generateDescription(store.bookmarks[key]));
})

$(document).on('click', '#addNew', function(){
  $('#main-content').html(createBookMarkTemplate);
});

$(document).on('click', '.delete-bookmark', function(){
  deleteBookmarks(store.bookmarks[store.activeBookmark].id).then(data => loadBookMarkListing()) .catch(err => {
    $("#js-error-message").text(`Something went wrong: ${err.message}`);
  });
});

$(document).on('change', '#star-rating', function() {
  let filter = $(this).children('option:selected').val();
  if (filter == 0) {
    store.bookmarks = store.totalBookmarks.slice();
    displayBookmarks();
    return;
  }
  store.bookmarks = [];
  store.totalBookmarks.map((bookmark) => {
    console.log('bookmark', bookmark.rating, filter);
    if (bookmark.rating >= filter) {
      store.bookmarks.push(bookmark);
    }
    return true;
  });
  displayBookmarks();
})
/*response data formatting and display*/
// function watchForm() {
//   $('form').submit(event => {
//     event.preventDefault();
//     //capture the value of the user's input
    
//     getNews(searchTerm, maxResults);
//   });
// }

//$(watchForm);

/* when 'new' button is clicked, bookmark information is stored in "Store.bookmarks"*/

/* when a bookmark is selected, user sees a detailed view with description and site link*/

/*when a 'filter by' dropdown element is selected users can filter bookmarks by rating
$(document).ready(function(){
  $("#bookmarkForm").hide();
*/
  