// header Scrool Color change
let header = document.querySelector('header');

window.addEventListener('scroll',function(){
    header.classList.toggle('shadow', window.scrollY > 0);
});