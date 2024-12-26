const modeCheck = document.getElementById("modeCheck")
const html = document.querySelector('html');
const body = document.querySelector("body");



function toggle(){
    if (modeCheck.checked){
        html.style.setProperty("color-scheme", "light");
    } else {
        html.style.setProperty("color-scheme", "dark");
    }
}


function linkFunc(element){
    console.log(element)
    element.scrollIntoView({behavior:"smooth"});
}