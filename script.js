
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const images = document.querySelectorAll(".slider img");
const imageWidth = images[0].clientWidth;
let counter = 1;

slider.style.transform = "translateX(" + -imageWidth * counter + "px)";

function AutoSlide() {
    if (counter >= images.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slider.style.transition = "transform 0.4s ease-in-out";
    slider.style.transform = "translateX(" + -imageWidth * counter + "px)";
}

let slideInterval = setInterval(autoSlide, 2000);

nextBtn.addEventListener("click", () => {
    clearInterval(slideInterval);
    if (counter >= images.length - 1) return;
    counter++;
    slider.style.transition = "transform 0.4s ease-in-out";
    slider.style.transform = "translateX(" + -imageWidth * counter + "px)";
    slideInterval = setInterval(autoSlide, 2000);
});

prevBtn.addEventListener("click", () => {
    clearInterval(slideInterval);
    if (counter <= 0) return;
    counter--;
    slider.style.transition = "transform 0.4s ease-in-out";
    slider.style.transform = "translateX(" + -imageWidth * counter + "px)";
    slideInterval = setInterval(autoSlide, 2000);
});

slider.addEventListener("transitionend", () => {
    if (images[counter].id === "lastClone") {
        slider.style.transition = "none";
        counter = images.length - 2;
        slider.style.transform = "translateX(" + -imageWidth * counter + "px)";
    }
    if (images[counter].id === "firstClone") {
        slider.style.transition = "none";
        counter = images.length - counter;
        slider.style.transform = "translateX(" + -imageWidth * counter + "px)";
    }
});
