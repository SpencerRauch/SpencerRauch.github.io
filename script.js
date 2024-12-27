const modeCheck = document.getElementById("modeCheck")
const html = document.querySelector('html');
const body = document.querySelector("body");
const initialDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (!initialDark){
    modeCheck.checked = true;
}


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