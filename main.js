function showSmallMenu() {
    const toggleMenu = document.querySelector('.toggle-menu');
    if (toggleMenu.style.display === 'none') toggleMenu.style.display = 'block';
    else toggleMenu.style.display = 'none';
};

const hamburger = document.querySelector('#hamburger');
const hiddenMenu = document.querySelector('.navlistBurger');
hamburger.addEventListener('click', e => {
    e.preventDefault();
    if (hiddenMenu.style.display === 'none') hiddenMenu.style.display = 'block';
    else hiddenMenu.style.display = 'none';
});


