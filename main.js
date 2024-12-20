/*-------------toggle icon navbar------------------------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*-------------scroll section active link------------------------------*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href=' + id + ']').classlist.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);


    /*--------------remove toggle icon and navbat------------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*-------------------scroll reveal----------------*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img' ,{origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin: 'right'});


const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst','Project Manager','frontend Developer','UI/UX Designer'],
    typedSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

