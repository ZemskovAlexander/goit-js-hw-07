import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galaryList = document
  .querySelector(".gallery")
  .insertAdjacentHTML("beforebegin", `<div class="gallery"></div>`);
console.log(galleryItems);
