
let button = document.querySelector("#btn");
let chatBox = document.querySelector(".container"); 
button.addEventListener("click", function(){
    chatBox.classList.toggle("hide");
    button.classList.toggle("rotate")

});