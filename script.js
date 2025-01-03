const modeCheck = document.getElementById("modeCheck")
const html = document.querySelector('html');
const body = document.querySelector("body");
const initialDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const contactIcons = document.querySelectorAll(".contact_icon");

if (!initialDark){
    modeCheck.checked = true;
}

console.log(contactIcons.length);

contactIcons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        console.log("entered");
        console.log(icon.nextElementSibling);
        icon.nextElementSibling.style.setProperty("display", "block");
    });
});

contactIcons.forEach(icon => {
    icon.addEventListener("mouseleave", () => {
        icon.nextElementSibling.style.setProperty("display", "none");
    });
});

function toggle(){
    if (modeCheck.checked){
        html.style.setProperty("color-scheme", "light");
    } else {
        html.style.setProperty("color-scheme", "dark");
    }
}


function linkFunc(element){
    element.scrollIntoView({behavior:"smooth"});
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}