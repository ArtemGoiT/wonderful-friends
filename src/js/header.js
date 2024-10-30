const burgerMenu = document.getElementById('burgerMenu');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const menuLinks = document.querySelectorAll('.modal-nav a'); // Ссылки в модальном меню

function openModal() {
    modal.classList.add('show');
    document.body.classList.add('no-scroll');
}

function closeModal() {
    modal.classList.remove('show');
    document.body.classList.remove('no-scroll');
}

burgerMenu.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Закрытие модального окна при клике на ссылки меню
menuLinks.forEach(link => {
    link.addEventListener('click', closeModal);
});
