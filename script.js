const menuIcon=document.querySelector('.menu-icon')
const container=document.querySelector('.container')
menuIcon.addEventListener('click',()=>{
    container.classList.toggle('navigate')
})


 // JavaScript Code
 let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide-upper');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });
}

function prevSlide() {
    slideIndex = (slideIndex === 0) ? 0 : slideIndex - 1;
    showSlides();
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide-upper');
    slideIndex = (slideIndex === slides.length - 1) ? slides.length - 1 : slideIndex + 1;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

showSlides();



// START SECTION

// for slider movement in testimonial page .left,right movement

// Get the arrow buttons
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Get all the slides
const slides = document.querySelectorAll('.slide-upper');

// Initialize current slide index
let currentSlideIndex = 0;

// Function to show the current slide
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Show the slide at the specified index
    slides[index].style.display = 'flex';
}

// Show the initial slide
showSlide(currentSlideIndex);

// Function to move to the next slide
function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

// Function to move to the previous slide
function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
}

// Event listener for the right arrow button
rightArrow.addEventListener('click', nextSlide);

// Event listener for the left arrow button
leftArrow.addEventListener('click', prevSlide);



// End  SECTION 

/*
// Get the arrow buttons
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Get all the slides
const slides = document.querySelectorAll('.slide-upper');

// Initialize current slide index
let currentSlideIndex = 0;

// Function to show the current slide
function showSlide(index) {
    // Add a class to the current slide to trigger the animation
    slides[currentSlideIndex].classList.remove('active');
    slides[index].classList.add('active');
    currentSlideIndex = index;
}

// Show the initial slide
showSlide(currentSlideIndex);

// Function to move to the next slide
function nextSlide() {
    let newIndex = currentSlideIndex + 1;
    if (newIndex >= slides.length) {
        newIndex = 0;
    }
    showSlide(newIndex);
}

// Function to move to the previous slide
function prevSlide() {
    let newIndex = currentSlideIndex - 1;
    if (newIndex < 0) {
        newIndex = slides.length - 1;
    }
    showSlide(newIndex);
}

// Event listener for the right arrow button
rightArrow.addEventListener('click', nextSlide);

// Event listener for the left arrow button
leftArrow.addEventListener('click', prevSlide);
*/
