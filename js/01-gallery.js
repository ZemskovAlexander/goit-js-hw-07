import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const modalTemplate = (img) =>
//   `
//   <div class="modal">
//     <img src=${img}>
//     </div>
//   `;

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}" onclick="return false;">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a>
    </div>
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

// const instance = basicLightbox.create(document.querySelector(".modal")).show();