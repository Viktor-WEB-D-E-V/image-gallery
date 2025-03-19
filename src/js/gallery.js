import { galleryItems } from './gallery-items';
import galleryItemTmp from '../template/imageItemTmp';
const gallery = document.querySelector('.gallery');

console.log(galleryItemTmp);

function createMarkup() {
  //Using handlebars tmp
  const markup = galleryItemTmp(galleryItems);
  gallery.insertAdjacentHTML('afterbegin', markup);
}

createMarkup();
