/**
 * Scrolls the browser window to the element with the given
 * id attribute, setting its relative location to be on top.
 */
function scrollToElement() {
    // Find and remove the last "active" nav element, if exists
    let lastActive = getLastActive();
    if (lastActive) {
        lastActive.classList.remove('active');
    }

    window.event.target.classList.add('active');
    let id = window.event.target.getAttribute('data-target')
    let el = document.getElementById(id);
    let nav = document.querySelector('nav');
    let top = el.getBoundingClientRect().top + window.pageYOffset - nav.offsetHeight - 4;

    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
}

function getLastActive() {
    return document.querySelector('.active');
}