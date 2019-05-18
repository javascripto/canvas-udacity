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
  const blobImage = canvas.toBlob(blob => {
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob);
    a.target = '_blank';
    a.innerText = 'asd'
    // a.click()
    console.log(a);
    document.body.appendChild(a)
  });

  // window.open(savedImage)
  // window.open(blobImage)
  // console.log(savedImage);
  console.log(blobImage);
}

image.src = imageUrl;