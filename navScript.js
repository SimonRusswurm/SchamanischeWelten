const navbar = document.querySelector('#navbar');
const dropTrigger = document.querySelector("#dropTrigger");
const navDrop = document.querySelector(".navDrop");
const navOpen = true;

const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


const openNavDrop = (event) => {
    let opened = false;
	if(event.target.matches("#dropTrigger")){
		navDrop.style.left = `${dropTrigger.offsetLeft - 20}px`;
		navDrop.style.top = `${50}px`;
		navDrop.classList.toggle("show");
        console.log(navDrop.classList);
	}
	if(navDrop.classList.contains('show')){
		opened = true;
	}
	if(opened && !event.target.matches("#dropTrigger")){
		navDrop.classList.remove("show");
	}
}

window.addEventListener("click", (event) => {
	openNavDrop(event);
});

const repositionNavDrop = () => {
    navDrop.style.left = `${dropTrigger.offsetLeft - 20}px`;
}

window.addEventListener('resize', repositionNavDrop);




if (document.URL.includes('index')) {
    navbar.style = "transition: background-color 0s;"
    navbar.style.backgroundColor = "transparent";
}

if (!document.URL.includes('index')) {
    navbar.style.backgroundColor = "#233240";
}

/*******************************hamburgerNav***************************** */

const navHamburger = document.querySelector(".navHamburger");
const navMobile = document.querySelector(".navMobile");
navMobile.style.top = '0px';

window.addEventListener('click', (event) => {
	if(event.target.matches(".navHamburger")){
		navMobile.style.top = `${0}px`;
		navMobile.classList.toggle('show2');
		
	}else{
		navMobile.classList.remove("show2");
	}
})

window.addEventListener('resize', ()=> {
	if(window.innerWidth > 935)
	navMobile.classList.remove("show2");
});


/*******************************onScroll***************************** */

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
	navbar.style = "";
	navMobile.classList.remove("show2");
	var currentScrollPos = window.pageYOffset;
	if (currentScrollPos < 0) {
		currentScrollPos = 0;
	}
	if (prevScrollPos >= currentScrollPos) {
		navbar.style.top = "0";
		navbar.style.backgroundColor = "#233240"
	} else {
		navbar.style.top = "-60px";
		navDrop.classList.remove('show');
        navbar.style.backgroundColor = "transparent";
	}

	if (currentScrollPos < 100 && document.URL.includes('index')) {
		navbar.style.backgroundColor = "transparent";
	}

	prevScrollPos = currentScrollPos;
}