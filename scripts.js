// Example: Toggle navigation on small screens
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Menu';
    toggleButton.classList.add('menu-toggle');
    document.querySelector('header .container').insertBefore(toggleButton, nav);

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
