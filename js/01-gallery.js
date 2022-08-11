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

const instance = basicLightbox
  .create(`<img class="modal-img" src=""/>`, {
    onShow: instance => {
      window.addEventListener('keydown', onEscClick);
    },

    onClose: instance => {
      window.removeEventListener('keydown', onEscClick);
    },
  });

function onImageClick(evt) {
   evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector('img').src = evt.target.dataset.source;

  instance.show();
}

function onEscClick(evt) {
  if (evt.key === "Escape") {
    instance.close();
    return;
  }
}

