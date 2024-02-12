// selecting HTml elements
const closeBtn = document.querySelector(".close-btn");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const layer = document.querySelector(".layer");
const images = document.querySelectorAll("figure img");
const layerImage = document.querySelector(".layer-image");
// global image index
let currentIndex = 0;

// looping throw all gallary images
for (let [index, image] of images.entries()) {
  image.addEventListener("click", function () {
    currentIndex = index;
    showLayer();
    layerImage.setAttribute("src", `./images/image-${index}.jpg`);
  });
}

function closeLayer() {
  layer.style.visibility = "hidden";
}

function showLayer() {
  layer.style.visibility = "visible";
}

function showNext() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  layerImage.setAttribute("src", `./images/image-${currentIndex}.jpg`);
}

function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  layerImage.setAttribute("src", `./images/image-${currentIndex}.jpg`);
}

layer.addEventListener("click", function (e) {
  if (e.target === this) closeLayer();
});
closeBtn.addEventListener("click", closeLayer);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight") showNext();
  else if (e.key === "ArrowLeft") showPrev();
  else if (e.key === "Escape") closeLayer();
});
