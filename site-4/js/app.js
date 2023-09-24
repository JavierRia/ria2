

const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');


burgerMenu.addEventListener('click', function(){
     mobileMenu.classList.toggle('mobile-active');
});



function toggleFunction(){
    document.getElementById('popup-1').classList.toggle("act");
}