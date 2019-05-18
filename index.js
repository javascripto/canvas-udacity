import './style.css';
import { imageUrl } from './imports'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const image = new Image();
image.crossOrigin='Anonymous';

image.onload = () => {
  const { width: w, height: h } = canvas;
  ctx.drawImage(image, 0, 0, w, h);

  ctx.strokeStyle = "white"
  ctx.fillStyle = "greenyellow"
  ctx.fillRect(100, 100, 100, 100)
  ctx.strokeRect(50, 50, 50, 50)
  ctx.clearRect(100, 100, 50, 50)
  
  // ctx.clearRect(0, 0, w, h);
  // canvas.width = w; // Alterar dimensoes do canvas tambem apaga o mesmo

  // // Scale, Translate, Rotate:
  // ctx.scale(2, 2); // desenha na escala 2x2 horizontalXvertical
  // ctx.translate(32, 40); // move o desenho em pixels horizoltais e verticais
  // const degrees = -45;
  // const radians = degrees * (Math.PI/180);
  // ctx.rotate(radians);

  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(50, 50);
  ctx.lineTo(50, 10);
  ctx.lineTo(10, 10);
  ctx.fill();
  ctx.stroke();

  // Save e Restore
  ctx.fillStyle = "blue";
  ctx.fillRect(0,0,50,50);
  // Save state with blue fill
  ctx.save();
  ctx.fillStyle = "green";
  ctx.fillRect(100,100,10,10);
  // Restore to blue fill
  ctx.restore();
  ctx.fillRect(200,10,20,20);
  // O estado do canvas pode armazenar:
  // A matriz de transformação atual (rotação, dimensionamento, translação)
  // strokeStyle, fillStyle, font, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, textAlign, textBaseline, A região de corte atual


  const savedImage = canvas.toDataURL();
  // const blobImage = canvas.toBlob(blob => {
  //   const a = document.createElement('a')
  //   a.href = URL.createObjectURL(blob);
  //   a.target = '_blank';
  //   a.innerText = 'asd'
  //   // a.click()
  //   console.log(a);
  //   document.body.appendChild(a)
  // });

  // window.open(savedImage)
  // window.open(blobImage)
  console.log(savedImage);
  // console.log(blobImage);
}

image.src = imageUrl;