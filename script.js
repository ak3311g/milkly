const carousel = document.querySelector('.carousel-inner');
            const items = document.querySelectorAll('.carousel-item');
            const totalItems = items.length;
            const prevButton = document.querySelector('.carousel-prev');
            const nextButton = document.querySelector('.carousel-next');
            let currentIndex = 0;
            let itemWidth = items[0].clientWidth;
    
            function updateCarousel() {
                itemWidth = items[0].clientWidth; // Get updated width
                carousel.style.transition = 'transform 0.5s ease-in-out';
                carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            }
    
            function moveToNext() {
                if (currentIndex >= totalItems - 2) {
                    // Instantly reset to first without animation
                    carousel.style.transition = 'none';
                    currentIndex = 0;
                    carousel.style.transform = `translateX(0)`;
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
                    currentIndex = totalItems - 2;
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
    
            // Auto move every 3 seconds
            setInterval(moveToNext, 3000);