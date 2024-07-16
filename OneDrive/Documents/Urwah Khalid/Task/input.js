
 
function changeColor(color) {
    document.body.style.background = color;
}

function myFunc() {
    changeColor('yellow');
    result.innerHTML = "Background Color changed";
} 

const bgclr = document.getElementById("clr"); 
const headingg = document.querySelector(".picker");
bgclr.addEventListener("input", () => { 
    document.body.style.backgroundColor = bgclr.value; 
});





     
     image = document.getElementById("img1");
     function enlargeImg() {
         image.style.transform = "scale(1.4)";
         image.style.transition = "transform 0.25s ease";
     }
     function resetimg() {
         image.style.transform = "scale(1)";
         image.style.transition = "transform 0.25s ease";
     }





















