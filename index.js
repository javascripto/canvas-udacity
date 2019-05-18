import './style.css';
import { imageUrl } from './imports'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const image = new Image();

image.onload = () => {
  const { width: w, height: h } = canvas;
  ctx.drawImage(image, 0, 0, w, h);
}

image.src = imageUrl;