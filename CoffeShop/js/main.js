// Add Background at navbar when window scroll 
window.addEventListener('scroll' ,function() {
    const ScrollY = window.pageYOffset;
    const navContainer = document.querySelector('.navigation-container');
    if(ScrollY > 5) {
       navContainer.classList.add('nav-scroll');
    } else {
        navContainer.classList.remove('nav-scroll');
    }
})


// Responsive Navbar
const navigation = document.getElementById('navigation');
const hamburger = document.querySelector('#hamburger');


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navigation.classList.toggle('nav-active');
});

navLinks.forEach(anchor => {
    anchor.addEventListener('click', function() {
        navigation.classList.remove('nav-active');
        hamburger.classList.remove('hamburger-active');
    });
});