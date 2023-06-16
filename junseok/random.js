const randomImg = document.getElementById("random-image");
const randomBtn = document.getElementById("random-btn");

const images = [
  "./images/deer.jpg",
  "./images/flowers.jpg",
  "./images/mountain.jpg",
  "./images/ocean.jpg",
  "./images/river.jpg",
  "./images/sky.jpg",
  "./images/tree.jpg",
  "./images/turtle.jpg",
];

randomBtn.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * images.length);

  randomImg.src = images[randomNum];
});
