
// Ambil elemen-elemen yang diperlukan
const menuBtn = document.getElementById('menu-btn');
const menuOpenIcon = menuBtn.querySelector('svg:last-of-type');
const menuCloseIcon = menuBtn.querySelector('svg:first-of-type');
const mobileMenu = document.getElementById('mobile-menu');

// Tambahkan event listener untuk klik pada burger menu
menuBtn.addEventListener('click', () => {
    const isMenuOpen = menuBtn.getAttribute('aria-expanded') === 'true';

    // Toggle nilai aria-expanded
    menuBtn.setAttribute('aria-expanded', !isMenuOpen);

    // Toggle class "hidden" dan "block" untuk icon
    menuOpenIcon.classList.toggle('hidden', isMenuOpen);
    menuOpenIcon.classList.toggle('block', !isMenuOpen);
    menuCloseIcon.classList.toggle('hidden', !isMenuOpen);
    menuCloseIcon.classList.toggle('block', isMenuOpen);

    // Toggle tampilan mobile menu jika diperlukan
    mobileMenu.classList.toggle('hidden', isMenuOpen);
});
