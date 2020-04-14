const menu_element = document.querySelector(".header__bottom");
const test_element = document.querySelector(".main");
const hidden_element = document.querySelector(".main__hidden");
const good_link_elements = document.querySelectorAll(".good__link");

window.addEventListener ("scroll", function() {
 if (menu_element.getBoundingClientRect().top <= 0) {
   menu_element.classList.add("main__sticky-menu");
   hidden_element.classList.add("main__visible");
 } 
 if (test_element.getBoundingClientRect().top >= 0) {
   menu_element.classList.remove("main__sticky-menu");
   hidden_element.classList.remove("main__visible");
 }
})