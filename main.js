/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...

// Stap 2: addEventListener
// scaleLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...

// stap 1. de frontend link uit de html halen
let scaleLink = document.querySelector('a[href="#frontend"]');

//stap 2. een click event toevoegen aan de scaleLink
scaleLink.addEventListener('click', scaleClick);

//stap 4. animationend toegoegen aan de scaleLink
scaleLink.addEventListener('animationend', scaleClick);

//stap 3. door de event scaleClick te maken wordt er een class toegevoegd aan scaleLink
function scaleClick() {
  scaleLink.classList.toggle('frontendscaled');
}

//stap 1. de &link uit de html halen
let enLink = document.querySelector('a[href="#and"]');

//stap 2. een click event toevoegen aan enLink
enLink.addEventListener('click', enClick);

//stap 4. een animation end toevoegen aan enLink
enLink.addEventListener('animationend', enClick)

//stap 3. class toevoegen aan enLink
function enClick() {
  enLink.classList.toggle('andtranslated');
}

//development

let devshake = document.querySelector('a[href="#development"]');

devshake.addEventListener('dblclick', shakeClick);
devshake.addEventListener('animationend', shakeClick);

function shakeClick() {
  devshake.classList.toggle('shakingdev');
}


// sprint 5 link met focus

let counter = 0;

// gebruik een kleur, met die counter.
// misschien met een array.. ['red', 'blue', 'purple', étc..]

const colors = ["pink", "#9d7beb", "#050840"]

// zoek de link met querySel..

let sprintLink = document.querySelector('a[href="#sprint-5"]');

// luister naar click

sprintLink.addEventListener('focus', counterUp);

// bij elke click, verander counter + 1

let i = 0 

function counterUp() {
  if (i > 2) {
  i = 0
  }

  counter = colors[i]
  sprintLink.style.backgroundColor = counter
  i = i + 1
  console.log(counter)
}

