const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

// Initialize Variables
var closePopup = document.getElementById("popupclose");
var closePopup2 = document.getElementById("popupclose2");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var popup2 = document.getElementById("popup2");
var button = document.getElementById("button");
var button2 = document.getElementById("button2");

// Close Popup Event
closePopup.onclick = function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
};

closePopup2.onclick = function() {
    overlay.style.display = 'none';
    popup2.style.display = 'none';
};


// Show Overlay and Popup
button.onclick = function() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

button2.onclick = function() {
    overlay.style.display = 'block';
    popup2.style.display = 'block';
}