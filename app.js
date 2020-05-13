const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', function () {
  navList.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  const navBar = document.querySelector('.navbar');
  navBar.classList.toggle('sticky', window.scrollY > 0);
});

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // e.preventDefault();

    navList.classList.toggle('active');
  });
});
