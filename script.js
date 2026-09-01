// ================= Slideshow =================

const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

}, 5000);


// ================= About Animation =================

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


// ================= Accordion =================

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {

    header.addEventListener("click", () => {

        const currentItem = header.parentElement;

        const isActive = currentItem.classList.contains("active");

        // Close every accordion
        document.querySelectorAll(".accordion-item").forEach(item => {

            item.classList.remove("active");

        });

        // Open clicked one
        if(!isActive){

            currentItem.classList.add("active");

        }

    });

});