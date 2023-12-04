document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('menu-toggle');
  var mainNav = document.querySelector('.main-nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      this.classList.toggle('open');
      mainNav.classList.toggle('show-it');
    });

    mainNav.addEventListener('click', function () {
      menuToggle.classList.remove('open');
      mainNav.classList.remove('show-it');
    });
  }
});


  