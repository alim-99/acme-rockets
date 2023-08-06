// Menu Open And Close Logic  

// Variables
const hamburgerBtn = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");

// Handle The Menu
const menuHandler = () => {
  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
}

// Toggle The Menu
const toggleMenu = () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
}

// Apply menuHandler function when the DOMContentLoaded
document.addEventListener('DOMContentLoaded', menuHandler)


// Add The Footer Year Automatiocaly
new Date().getFullYear()
let date = new Date();
console. log(date. getFullYear());
const copyrightFooter = ` <p> Copyright © ${new Date(). getFullYear()} </p> `;
document. getElementById('year'). innerHTML = copyrightFooter;