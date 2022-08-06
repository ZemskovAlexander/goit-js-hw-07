import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItemss
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" 
        href="${original}"onclick="return false;">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
    </a>
  `;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  basicLightbox
    .create(
      `
    <img src="${galleryItems.original}">
`
    )
    .show();

  if (!evt.target.classList.contains("gallery__item")) {
    return;
  }

  console.log(evt.target);
  // modalTemplate();
}
