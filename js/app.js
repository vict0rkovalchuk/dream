'use strict';

document.addEventListener('DOMContentLoaded', function () {
  function hamburgerToggle() {
    const burger = document.querySelector('.header-burger');
    const menu = document.getElementById('mobileMenu');
    burger.addEventListener('click', () => {
      menu.classList.toggle('active');
      burger.classList.toggle('active');
    });
  }
  ;
  function stickyHeader() {
    const header = document.querySelector('.header');
    if (!header) return;
    const headerHeight = header.offsetHeight;
    let spacer = document.querySelector('.header-spacer');
    if (!spacer) {
      spacer = document.createElement('div');
      spacer.className = 'header-spacer';
      spacer.style.height = `${headerHeight}px`;
      spacer.style.display = 'none';
      header.parentNode.insertBefore(spacer, header.nextSibling);
    }
    if (window.innerWidth < 1280) {
      if (window.scrollY >= headerHeight) {
        header.classList.add('fixed');
        spacer.style.display = 'block';
      } else {
        header.classList.remove('fixed');
        spacer.style.display = 'none';
      }
    } else {
      header.classList.remove('fixed');
      spacer.style.display = 'none';
    }
  }
  hamburgerToggle();
  window.addEventListener('DOMContentLoaded', stickyHeader);
  window.addEventListener('scroll', stickyHeader);
  window.addEventListener('resize', stickyHeader);
});
//# sourceMappingURL=app.js.map
