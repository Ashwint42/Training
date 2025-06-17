const bottomNav = document.querySelector('#bottom-nav');
const video = document.querySelectorAll('video');
const topNavLinkText = document.querySelectorAll('.top-nav-link-text');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 10) {
        bottomNav.style.display = 'none';
        video.forEach(v => v.style.display = "none");
        topNavLinkText.forEach(topNavLink => topNavLink.style.marginTop = "-20px");

    } else {
        bottomNav.style.display = 'flex';
        video.forEach(v => v.style.display = "flex");
        topNavLinkText.forEach(topNavLink => topNavLink.style.marginTop = "20px");
    }
})