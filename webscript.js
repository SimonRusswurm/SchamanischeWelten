const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* **************************** NAV ON SCROLL **************************** */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if(currentScrollPos < 0){
	  currentScrollPos = 0;
  }
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
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
	document.createElement('div')
	
	
}

