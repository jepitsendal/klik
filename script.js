// Navigation
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navItems.classList.toggle('active');
    
    // Toggle nav items visibility
    if (navItems.classList.contains('active')) {
        navItems.style.display = 'flex';
        navItems.style.left = '0';
    } else {
        navItems.style.left = '-100%';
        setTimeout(() => {
            navItems.style.display = 'none';
        }, 300); // Match this with your CSS transition time
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-items a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navItems.classList.remove('active');
        navItems.style.left = '-100%';
        setTimeout(() => {
            navItems.style.display = 'none';
        }, 300);
    });
});

// Slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlidePosition() {
        slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    // Event listeners for arrows
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlidePosition();
        });
    });

    // Auto slide every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause auto-slide when hovering
    slidesWrapper.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    // Resume auto-slide when mouse leaves
    slidesWrapper.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Initialize first slide
    updateSlidePosition();
});