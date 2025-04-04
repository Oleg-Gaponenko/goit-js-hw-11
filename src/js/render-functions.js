import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


// У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:

// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї,
// додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.


const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

function createGallery (images) {
    const galleryMarkup = images.map(( { webformatURL, largeImageURL, tags, likes, views, comments, downloads } ) => `
    <li class="gallery-item">
  <a class="gallery-link" href="${webformatURL}">
    <img
      class="gallery-image"
      src="${largeImageURL}"
      alt="${tags}"
    />
  </a>
  <div class="info">
    <h2 class="title">Likes<h2>
   <p class="item">${likes}</p>
    <h2 class="title">Views<h2>
   <p class="item">${views}</p>
    <h2 class="title">Comments<h2>
   <p class="item">${comments}</p>
    <h2 class="title">Downloads<h2>
   <p class="item">${downloads}</p>
  <div>
</li>
`).join('');

gallery.innerHTML = galleryMarkup;
}

new SimpleLightbox ('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

function clearGallery() {
    gallery.innerHTML = '';
}

function showLoader() {
    loader.classList.remove('.hidden');
}

function hideLoader() {
    loader.classList.add('.hidden');
}

export { createGallery, clearGallery, showLoader, hideLoader };
