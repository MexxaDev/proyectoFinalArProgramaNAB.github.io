const popup = document.querySelector('#popup');
const popupText =document.querySelector('#popupText');
function cerrarPopup(){
    popup.style.display = "none";
}
function maxPopup(){
    popup.style.width = "15em";
    popup.style.height = "10em";
    popupText.style.display ="block";
}
function miniPopup(){
    popup.style.width = "15em";
    popup.style.height = "4em";
    popupText.style.display ="none";
}