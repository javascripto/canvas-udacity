import './style.css';
import { imageUrl } from './imports'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const image = new Image();
image.crossOrigin='Anonymous';

image.onload = () => {
  const { width: w, height: h } = canvas;
  ctx.drawImage(image, 0, 0, w, h);

  const savedImage = canvas.toDataURL();
  const blobImage = canvas.toBlob();

  // window.open(savedImage)
  // window.open(blobImage)
  console.log(savedImage);
  console.log(blobImage);
}

image.src = imageUrl;