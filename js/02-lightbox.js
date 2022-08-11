import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function createGalleryCardsMarkup(items) {
  return items
    .map(
      (item) =>
        `
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image"
      src="${item.preview}"
      alt="${item.description}" />
    </a>
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
}

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {});
gallery.on("captionDelay", function () {});

// Не доходит, как вносить параметры captionDelay? 🥺🥺🥺
