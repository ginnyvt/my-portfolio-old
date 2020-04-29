const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    links.classList.remove('active');

    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - 75;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
  });
});
