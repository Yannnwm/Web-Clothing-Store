// toggle class active

const navbarNav = document.querySelector
('.navbar-nav');

// if click
document.querySelector('#hamburger-menu'). 
onclick = (event) => {
    navbarNav.classList.toggle('active');
    event.preventDefault();
};

// erase nav
const hamburger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})