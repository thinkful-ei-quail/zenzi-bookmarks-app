const createBookMarkTemplate = `<section class="text-center-custom">
  <form id="addBookmark" class="m-auto">
    <div class="text-left m-b-1">
      <label for="address">Add New Bookmark:</label>
    </div>
    <div>
      <input class="p-1" type="text" name="url" placeholder="Enter web address here">
    </div>
    
    <div class="border m-t-1">
      <div>
        <input class="p-1" type="text" name="title" placeholder="Enter Title here">
      </div>

      <div id="give-rating-star-container" class="p-1">
        <i class="pointer give-rating-star fa fa-star p-l-1" data-selected="1" data-number="1" aria-hidden="true"></i>
        <i class="pointer give-rating-star fa fa-star-o p-l-1" data-selected="0" data-number="2" aria-hidden="true"></i>
        <i class="pointer give-rating-star fa fa-star-o p-l-1" data-selected="0" data-number="3" aria-hidden="true"></i>
        <i class="pointer give-rating-star fa fa-star-o p-l-1" data-selected="0" data-number="4" aria-hidden="true"></i>
        <i class="pointer give-rating-star fa fa-star-o p-l-1" data-selected="0" data-number="5" aria-hidden="true"></i>
      </div>

      <div class="p-1">
        <textarea name="bookmark_desc" rows="10" ></textarea>
      </div>
    </div>

    <div class="m-t-1">
      <button id="cancelAddBookmark" class="m-r-1 p-l-2 p-r-2 p-t-1 p-b-1">Cancel</button>
      <button class="border-blue m-l-1 p-l-2 p-r-2 p-t-1 p-b-1 b-g-blue text-white">Create</button>
    </div>

    <div id="create-bookmark-error" class="d-none p-2 b-g-pink text-red m-t-2">
    </div>
    <div id="js-error-message" class="d-none p-2 b-g-pink text-red m-t-2">
    </div>
  </form>
</section>`;

export {createBookMarkTemplate};
