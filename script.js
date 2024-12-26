const modeCheck = document.getElementById("modeCheck")
const body = document.querySelector("body");


function toggle(){
    console.log(modeCheck.checked);
    if (modeCheck.checked){
        body.classList.add("light")
        body.classList.remove("dark")
    } else {
        body.classList.add("dark")
        body.classList.remove("light")
    }
}