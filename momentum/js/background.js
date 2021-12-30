const images = ["1.jpeg", "2.jpg", "3.jpg", "4.jpg"];

const len2 = images.length;
const index2 = Math.floor(Math.random() * len2);
const bgImg = document.createElement("img");
bgImg.src = "img/" + images[index2];
document.body.appendChild(bgImg);
