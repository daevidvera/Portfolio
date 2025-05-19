function scrollToElement(event) {
    event.preventDefault(); 

    let lastActive = document.querySelector('.navbar-nav .active');
    if (lastActive) {
        lastActive.classList.remove('active');
    }

    if (event.currentTarget.classList.contains('nav-link')) {
        event.currentTarget.classList.add('active');
    }

    
    let id = event.currentTarget.getAttribute('data-target');
    let el = document.getElementById(id);

    if (el) {
    
        let nav = document.querySelector('nav');
        let top = el.getBoundingClientRect().top + window.pageYOffset - nav.offsetHeight - 4;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    }
}