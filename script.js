// script.js
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;
const totalItems = items.length / 2; // Only count unique items, not duplicates
const itemWidth = items[0].offsetWidth;

function updateCarousel() {
    carouselInner.style.transition = 'transform 0.5s ease-in-out';
    carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex >= totalItems) {
        // Jump back to the start when reaching the duplicate set
        carouselInner.style.transition = 'none';
        currentIndex = 0;
        updateCarousel();
        setTimeout(() => {
            carouselInner.style.transition = 'transform 0.5s ease-in-out';
            currentIndex++;
            updateCarousel();
        }, 50);
    } else {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex <= 0) {
        // Jump to the end when reaching the start
        carouselInner.style.transition = 'none';
        currentIndex = totalItems;
        updateCarousel();
        setTimeout(() => {
            carouselInner.style.transition = 'transform 0.5s ease-in-out';
            currentIndex--;
            updateCarousel();
        }, 50);
    } else {
        currentIndex--;
        updateCarousel();
    }
});

// Optional: Auto-scroll feature
setInterval(() => {
    nextButton.click();
}, 3000);
