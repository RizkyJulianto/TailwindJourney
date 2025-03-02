// Add Background at navbar when window scroll 
window.addEventListener('scroll' ,function() {
    const ScrollY = window.pageYOffset;
    const navContainer = document.querySelector('.navigation-container');
    if(ScrollY > 5) {
       navContainer.classList.add('nav-active');
    } else {
        navContainer.classList.remove('nav-active');
    }
})