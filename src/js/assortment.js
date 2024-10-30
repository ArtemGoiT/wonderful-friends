function scrollLeft() {
  document.querySelector('.scroll-wrapper').scrollBy({left: -300, behavior: 'smooth'});
}

function scrollRight() {
  document.querySelector('.scroll-wrapper').scrollBy({left: 300, behavior: 'smooth'});
}
document.querySelector('.scroll-left').addEventListener('click', scrollLeft);
document.querySelector('.scroll-right').addEventListener('click', scrollRight);


const items = document.querySelectorAll('.assortment-item');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    items.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.add('dimmed'); // Затемнение других карточек
      }
    });
  });

  item.addEventListener('mouseleave', () => {
    items.forEach(otherItem => {
      otherItem.classList.remove('dimmed'); // Убираем затемнение
    });
  });
});
