
const slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}, 5000);

// animation for about company text
window.addEventListener("scroll", () => {
    const texts = document.querySelectorAll(".fly-text");

    texts.forEach(text => {
        const position = text.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if(position < screenPosition){
            text.classList.add("show");
        }
    });
});