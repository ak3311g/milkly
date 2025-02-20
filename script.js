const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 1; // Start from the first cloned item
let itemWidth = items[0].clientWidth;

// Clone first and last items
const firstClone = items[0].cloneNode(true);
const lastClone = items[totalItems - 1].cloneNode(true);

firstClone.classList.add('clone');
lastClone.classList.add('clone');

carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, items[0]);

function updateCarousel() {
    itemWidth = items[0].clientWidth; // Get updated width
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function moveToNext() {
    if (currentIndex >= totalItems) {
        // Instantly reset to first without animation
        carousel.style.transition = 'none';
        currentIndex = 1;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
            currentIndex++;
            updateCarousel();
        }, 20);
    } else {
        currentIndex++;
        updateCarousel();
    }
}

function moveToPrev() {
    if (currentIndex <= 0) {
        // Instantly move to last cloned item
        carousel.style.transition = 'none';
        currentIndex = totalItems - 1;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
            currentIndex--;
            updateCarousel();
        }, 20);
    } else {
        currentIndex--;
        updateCarousel();
    }
}

prevButton.addEventListener('click', moveToPrev);
nextButton.addEventListener('click', moveToNext);
window.addEventListener('resize', updateCarousel);

// Initial setup
carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

// Auto move every 3 seconds
setInterval(moveToNext, 3000);