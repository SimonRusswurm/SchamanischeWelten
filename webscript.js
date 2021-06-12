
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* **************************** NAV ON SCROLL **************************** */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	console.log(window.pageYOffset)
  var currentScrollPos = window.pageYOffset;
  if(currentScrollPos < 0){
	  currentScrollPos = 0;
  }
  
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
	document.getElementById("navbar").style.backgroundColor = "#233240"
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }

 if(currentScrollPos < 100){
	document.getElementById("navbar").style.backgroundColor = "";
  }

  prevScrollpos = currentScrollPos;
}

class info{
	constructor(dateString, locationString, maxPersons){
		this.date = dateString;
		this.location = locationString;
		this.maxPersons = maxPersons;	
	}
}

class seminar{
	constructor(seminartitel, description, infoClass, pdfName){
		this.title = seminartitel;
		this.description = description;
		this.info = infoClass;
		this.pdf = pdfName;
	}
}

const createNewSeminar = (seminar) => {
	document.createElement('div');	
}

const heroBgImages = [
	document.querySelector('.heroSeminar'),
	document.querySelector('.heroEducation')
]

const heroButtons = document.querySelectorAll('.heroButton');
const heroTitle = document.querySelector('#HeroTitle');

const changeBg = (heroButton) => {
	heroButtonID = Number(heroButton.id.replace('hB',''));

	heroBgImages.forEach(element => {
		console.log(element)
		element.style.opacity = 0;
	});

	heroBgImages[heroButtonID].style.opacity =1;
}

Array.from(heroButtons).forEach(element => {
	element.addEventListener('mouseover', function() {changeBg(element)})
});

