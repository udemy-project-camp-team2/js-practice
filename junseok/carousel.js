const carouselContainer = document.getElementById("carousel__container");
const carouselBtns = document.querySelectorAll(".carousel__btns");
const carouselImgs = document.querySelectorAll(".carousel__images");

const MAX_NUM = carouselImgs.length - 1;

let current = 0;

console.log(carouselImgs[0].clientWidth);

carouselBtns.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    const { name } = event.target;

    if (name === "prevBtn") {
      // prevBtn
      if (current === 0) return;
      current -= 1;
      animation(current);
      // carouselContainer.style.transform = `translateX(-${100 * current}%)`;
    } else if (name === "nextBtn") {
      // nextBtn
      if (current === MAX_NUM) return;
      current += 1;
      animation(current);
      // carouselContainer.style.transform = `translateX(-${100 * current}%)`;
    }
  }),
);

const animation = (current) => {
  requestAnimationFrame(() => {
    carouselContainer.style.transform = `translateX(-${100 * current}%)`;
    carouselContainer.style.transition = `all 0.2s linear`;
  });
};
