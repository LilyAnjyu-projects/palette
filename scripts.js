let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // 3秒ごとにスライドを切り替える
}


const menuToggle = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', function() {
    navList.classList.toggle('active');
});


