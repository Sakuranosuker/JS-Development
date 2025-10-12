const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalID = null;

// initializeSlider();

document.addEventListener("DOMContentLoaded",initializeSlider); // Waits for all the DOM content to load and then calls the initializer function.
function initializeSlider(){
    if(slides.length>0){
        slides[slideIndex].classList.add("displaySlide");
        intervalID = setInterval(nextSlide, 5000);
        console.log(intervalID);
    }
}
function showSlide(index){
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    slideIndex--;
    if(slideIndex<0){
        slideIndex = slides.length-1;
    }
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    if(slideIndex>=slides.length){
        slideIndex=0;
    }
    showSlide(slideIndex);
}
