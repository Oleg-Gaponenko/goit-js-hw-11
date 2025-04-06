import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const imageQuery = event.target.elements['search-text'].value.trim();

    if(imageQuery === ''){
        iziToast.error({
            title: Error,
            message: 'Please enter your search query!',
        })
     return;
    }

showLoader();
clearGallery();

getImagesByQuery(imageQuery)
    .then(images => {
        if(images.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            })
        }  else {
            createGallery(images);
        }

    })
    .catch(error => {
        iziToast.error({
            title: 'Error',
            message: 'Cannot fetch images'
        })
    })
    .finally(() => {
        hideLoader();
        form.reset();
    });
}
