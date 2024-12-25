let mobileMenu = document.querySelector(".mobile-menu");
let hamburgerIcon = document.querySelector(".hamburger");
let closeIcon = document.querySelector(".close");

if (window.innerWidth > 850) {
    hamburgerIcon.style.display = "none";
} else {
    hamburgerIcon.addEventListener("click", function () {
        mobileMenu.style.left = "0%";
        hamburgerIcon.style.display = "none";
        closeIcon.style.display = "block";
    });
    
    closeIcon.addEventListener("click", function () {
        mobileMenu.style.left = "100%";
        closeIcon.style.display = "none";
        hamburgerIcon.style.display = "block";
    });
}