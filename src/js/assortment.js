function scrollLeft() {
  document.querySelector('.scroll-wrapper').scrollBy({left: -300, behavior: 'smooth'});
}

function scrollRight() {
  document.querySelector('.scroll-wrapper').scrollBy({left: 300, behavior: 'smooth'});
}
document.querySelector('.scroll-left').addEventListener('click', scrollLeft);
document.querySelector('.scroll-right').addEventListener('click', scrollRight);