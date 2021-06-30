const heroBgImages = Array.from(document.querySelectorAll('.heroBg'));

const heroButtons = document.querySelectorAll('.heroButton');
const heroTitle = document.querySelector('#HeroTitle');
let currentID = 0;

const changeBg = (heroButton) => {
	currentID = Number(heroButton.id.replace('hB', '')) + 1;

	heroBgImages.forEach(element => {
		element.style.opacity = 0;
	});

	heroBgImages[currentID].style.opacity = 1;
}

Array.from(heroButtons).forEach(element => {
	element.addEventListener('mouseover', function () { changeBg(element) })
});

