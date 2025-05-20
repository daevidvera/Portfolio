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
    let nav = document.querySelector('nav');

    if (el) {
        let topOffset = id === "home" ? 10 : nav.offsetHeight + 4;
        let top = el.getBoundingClientRect().top + window.pageYOffset - topOffset;

        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    }

    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1);
    const el = document.getElementById(hash);
    const nav = document.querySelector('nav');

    if (el) {
        let topOffset = hash === "home" ? 10 : nav.offsetHeight + 4;
        let top = el.getBoundingClientRect().top + window.pageYOffset - topOffset;

        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('data-target') === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
});