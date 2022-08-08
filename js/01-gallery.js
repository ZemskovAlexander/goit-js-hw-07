import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryContainer = document.querySelector(".gallery");

function createGalleryCardsMarkup(items) {
  return items
    .map(
      (item) =>
        `
    <div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
      </a>
    </div>
  `
    )
    .join("");
}

const addGallaryMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.innerHTML = addGallaryMarkup;

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(evt) {
  blockStandartAction(evt);

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}"/>`
  ).show();

  galleryContainer.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });

  // Да, столько действий в одной фунции плохо.

}

function blockStandartAction(evt) {
  evt.preventDefault();
}

