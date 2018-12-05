const body = document.querySelector("body");

const IMG_NUMBER = 4;

function showImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRendom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = getRendom();
    showImage(randomNumber);
}

init();