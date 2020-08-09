function generateDescription(description)
{
  return `
    <section>
    <div class="b-g-grey w-50 m-t-2 border m-auto p-2 flex space-between">
        <span>${description.title}</span>
        <span><i class="delete-bookmark pointer fa fa-trash" aria-hidden="true"></i></span>
    </div>
    <div class="w-50 m-auto border">
      <div class="m-b-2 w-50 m-auto p-2 flex flex-h-center flex-v-center">
          <button class="border-none b-g-black text-white p-l-2 p-r-2 p-t-1 p-b-1">
            <a class="visit-site-button" href="${description.url}" target="_blank">Visit Site</a>
          </button>
          <span>
            <i class="rating-star-desc fa fa-star p-l-1" aria-hidden="true">
              <span class="text-white">${description.rating}</span>
            </i>
          </span>
      </div>
      <div class="w-100 bookmark-show-desc p-2">
        ${description.desc}
      </div>
    </div>
  </section>`;
}

export {generateDescription};