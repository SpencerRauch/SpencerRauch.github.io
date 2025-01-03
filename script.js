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

