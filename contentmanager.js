
const seminars = document.getElementById("seminars");

class Seminar {

    constructor(title, description, date, location = "Auerbach Weg 29,  8242 Auerbach", personCount = "8", costs, pdf, imagePath){
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = location;
        this.personCount = personCount;
        this.costs = costs;
        this.pdf = pdf;
        this.image = imagePath;
        this.online = true;
    }

    appendSeminarToDOM() {
        let seminarContainer  = document.createElement('div');
        let seminarWrapper  = document.createElement('div');
        let seminarText = document.createElement('div');
        let seminarTitle = document.createElement('h2');
        let seminarImage = document.createElement('img');
        let seminarDescription = document.createElement('p');
        let seminarInfo = document.createElement('p');
        let flex = document.createElement('div');
        let reservationButton = document.createElement('button');
        let moreInfosButton = document.createElement('button');
        
        seminarContainer.classList.add('seminarContainer');
        seminarWrapper.classList.add('seminarWrapper');
        seminarText.classList.add('seminarText');
        seminarImage.classList.add('seminarImage');
        seminarTitle.classList.add('width70');
        seminarDescription.classList.add('width70');
        reservationButton.classList.add('seminarButton');
        moreInfosButton.classList.add('seminarButton');
        flex.classList.add('flex');

        seminarTitle.innerHTML = this.title;
        seminarImage.src = this.image;
        seminarImage.alt = "schamanisches Seminar";
        seminarDescription.innerHTML = this.description;
        seminarInfo.innerHTML = `Datum: ${this.date}<br>Ort: ${this.location}<br>Teilnehmer*innen: ${this.personCount}<br>Kosten: € ${this.costs}`
        reservationButton.innerHTML = "Reservierung";
        moreInfosButton.innerHTML = "Mehr Infos";

        seminarText.appendChild(seminarTitle);
        seminarText.appendChild(seminarDescription);
        seminarText.appendChild(seminarInfo);
        flex.appendChild(reservationButton);
        flex.appendChild(moreInfosButton);
        seminarText.appendChild(flex);
        seminarWrapper.appendChild(seminarImage);
        seminarWrapper.appendChild(seminarText);
        seminarContainer.appendChild(seminarWrapper);
        seminars.appendChild(seminarContainer);
    }
}

const seminarList = [];
const description = "An diesem Tag wollen wir gemeinsam das Element Luft in all seinen Facetten erfahren. Wir werden Eintauchen in die Bedeutung der Luft im Schamanismus, durch Rituale und Übungen mit Ergänzungen aus der Medizin und der Kinesiologie. Im Zusammenspiel mit der Natur werden wir das Element Luft auch in der Pflanzenwelt erfahren.";

const testseminar = new Seminar("Luft - im Elementezyklus", description, "12.06.2021, 09:00 Uhr- 18:00 Uhr", "", "8",150,"asdf" ,"images/education.jpg" )

const nesem = new Seminar("test","asldkfalkdfj", 12304981, "aslkdfjwe", "4-8", 150, "alksdjf", "images/seminars.jpg");

nesem.online = false;

seminarList.push(testseminar, nesem);

seminarList.forEach(element => {
    if(element.online)
        element.appendSeminarToDOM();
});