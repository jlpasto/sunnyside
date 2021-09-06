const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');
const html = document.querySelector(".html");

btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open')){
        header.classList.remove('open');
        html.classList.remove('no-scroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        btnHamburger.setAttribute('aria-expanded', 'false');
    }

    else {
        header.classList.add('open');
        html.classList.add('no-scroll');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
        btnHamburger.setAttribute('aria-expanded', 'true');
    }
});