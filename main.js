const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav__list');
const linksContainer = document.querySelector('.links-container');

menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('active');
	// linksContainer.classList.toggle('active');
	// dynamically get navlist's height
	const containerHeight = linksContainer.getBoundingClientRect().height;
	const navListHeight = navList.getBoundingClientRect().height;
	if (containerHeight === 0) {
		linksContainer.style.height = `${navListHeight}px`;
	} else {
		linksContainer.style.height = 0;
	}
});

// Change Nav-style On-scroll
const navBar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const sectionOneOptions = {
	rootMargin: '-500px 0px 0px 0px',
};

const sectionObserverOne = new IntersectionObserver(
	(entries, sectionObserverOne) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				navBar.classList.add('nav-scrolled');
			} else {
				navBar.classList.remove('nav-scrolled');
			}
		});
	},
	sectionOneOptions
);
sectionObserverOne.observe(hero);
