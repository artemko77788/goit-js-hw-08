// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const pictureMarkap = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", pictureMarkap);
gallery.addEventListener("click", onPictureClick);

function createGallery(picture) {
  return picture
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

function onPictureClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  fadeSpeed: 170
});
