const burgerMenu = document.getElementById('burgerMenu');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

burgerMenu.addEventListener('click', function() {
    modal.classList.add('show');
});

modalClose.addEventListener('click', function() {
    modal.classList.remove('show');
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});