'use strict';

let apiStore = {
  title: '',
  url: '',
  rating: 0,
  desc: '',
};

function getBookmarks() {
  const url = `https://thinkful-list-api.herokuapp.com/zenzi/bookmarks`;
   
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => responseJson)
    .catch(err => {
      $("#js-error-message").text(`Something went wrong: ${err.message}`);
    });
}

function apiStoreBookmarks() {
  let apiUrl = `https://thinkful-list-api.herokuapp.com/zenzi/bookmarks`;

  let data = { 
    "title": apiStore.title, 
    "url": apiStore.url, 
    'desc': apiStore.description, 
    'rating': apiStore.rating
  };

  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  })
  .then(responseJson => {
    $("#js-error-message").hide();
    $('#create-bookmark-error').hide();
    return responseJson;
  })
  .catch((err) => {
    $("#js-error-message").text(`Something went wrong: ${err}`);
    $('#create-bookmark-error').hide();
    $("#js-error-message").show();
});
}


function deleteBookmarks(bookmarkId) {
  const url = `https://thinkful-list-api.herokuapp.com/zenzi/bookmarks/${bookmarkId}`;
   
  return fetch(url,{
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify([])
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  })
  .then(responseJson => responseJson)
  .catch((err ) => {
    $("#js-error-message").text(`Something went wrong: ${err.message}`);
  });
}

export {getBookmarks, apiStoreBookmarks, deleteBookmarks, apiStore};