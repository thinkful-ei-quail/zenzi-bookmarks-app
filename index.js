'use strict';
const store = {
  bookmarks: [
    {
      id: 'x56w',
      title: 'Title 1',
      rating: 3,
      url: 'http://www.title1.com',
      description: 'lorem ipsum dolor sit',
      expanded: false
    },
    {
      id: '6ffw',
      title: 'Title 2',
      rating: 5,
      url: 'http://www.title2.com',
      description: 'dolorum tempore deserunt',
      expanded: false
    }
  ],
  adding: false,
  error: null,
  filter: 0
};

/* when 'new' button is clicked, bookmark information is stored in "Store.bookmarks"*/

/* when a bookmark is selected, user sees a detailed view with description and site link*/

/*when a 'filter by' dropdown element is selected users can filter bookmarks by rating
$(document).ready(function(){
  $("#bookmarkForm").hide();

  $("#addBookmark").on("submit", function(event){
    event.preventDefault();
    console.log("form submitted");
    //validate data
    //fetch call to submit

    // If fetch is successful:
    store.adding = false;
    // Add bookmark data to store variable
    // store.bookmarks.push({/*bookmark data here*/})

    //maybe bookmark added alert

    // re-render
/*
  })

  $("#addNew").on("click", function(event){
    store.adding = true;
    // re-render
  })
});
*/