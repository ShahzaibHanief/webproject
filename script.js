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
