
// for profile drop down menu

let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
};

// show user side profile 
let profileMenu = document.getElementById("side-profile");
let userInfo = document.getElementById("user-info");

userInfo.addEventListener("click", function(){
    profileMenu.classList.toggle("open-profile");
});

// for edit profile 
let editProfile = document.getElementById("edit-profile");
let editButton = document.getElementById("edit-btn");

editButton.addEventListener("click", function(){
    editProfile.classList.toggle("open-profile");
});

// upload image preview 

let imageUpload = document.getElementById("upload-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
    imageUpload.src = URL.createObjectURL(inputFile.files[0]);
}

// for logout 
let Logout = document.getElementById("logout");
let logoutButton = document.getElementById("logout-btn");

logoutButton.addEventListener("click", function() {
    Logout.classList.toggle("show-logout");
});

// for to the top button 
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll" , () => {
   if (window.pageYOffset > 100){
       toTop.classList.add("active");
   }else{
       toTop.classList.remove("active");
   }
})
