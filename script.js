var total = 573,
    buttons = document.querySelector('.buttons'),
    pie = document.querySelector('.pie'),
    activeClass = 'active';

var continents = {
  bier: 20,
  weisswein : 22,
  rotwein: 25,
  sekt: 26,
  barcadi: 160,
  rum: 320
};

// work out percentage as a result of total
var numberFixer = function(num){
  var result = ((num * total) / 1000);
  return result;
}

// create a button for each country
for(property in continents){
  var newEl = document.createElement('button');
  newEl.innerText = property;
  newEl.setAttribute('data-name', property);
  buttons.appendChild(newEl);
}

// when you click a button setPieChart and setActiveClass
  buttons.addEventListener('click', function(e){
    if(e.target != e.currentTarget){
      var el = e.target,
          name = el.getAttribute('data-name');
      setPieChart(name);
      setActiveClass(el);
    }
    e.stopPropagation();
  });

var setPieChart = function(name){
  var number = continents[name],
      fixedNumber = numberFixer(number),
      result = fixedNumber + ' ' + total;

  pie.style.strokeDasharray = result;
}

var setActiveClass = function(el) {
  for(var i = 0; i < buttons.children.length; i++) {
    buttons.children[i].classList.remove(activeClass);
    el.classList.add(activeClass);
  }
}

// Set up default settings
setPieChart('bier');
setActiveClass(buttons.children[0]);

//-----------------------------///
var Geschlecht = document.getElementById("geschlecht").value;
var Koerpergroesse = document.getElementById("groesse").value;
var Koerpergewicht = document.getElementById("gewicht").value;
var Alter = document.getElementById("alter").value;
// var Trinkstart = document.getElementById("anfang").innerHTML;
// var Trinkende = document.getElementById("ende").innerHTML;
var Getränke_Liste_Array = new Array();   //Alle ausgewählten Getränke in einer Liste
var A = 0;
var GKW = 0
var A_neu = 0;

var newId = 0;
var clone;
var BAK;
// var Tinkeende_hours = Trinkende.getHours();
// var Tinkeende_minutes = Trinkende.getMinutes();



function duplicate(){
let clone = document.querySelector('#drinks-listen0').cloneNode(true);
clone.setAttribute( 'drinks-listen', ++newId );

document.querySelector('#duplication_model').appendChild( clone );

}

function validate(){
 is_checked();

 getA();
 berechne();
}


function is_checked(){
  var Checkbox =  document.getElementById("checkDisclaimar");
  if (Checkbox.checked == false){
    alert('Bitte Verifiziern Sie, dass der Hinweis gelesen wurde, um Ergebnis zu erhalten!');
    exit();
  }
}
// Berechnungen

function berechne(){
  if(Geschlecht == "weiblich"){
    berechne_GKW_Frau();
  }
  if(Geschlecht == "männlich"){
    berechne_GKW_Mann();
  }


 berechne_BAK();


 alert("BAK: " + BAK);
}
  //Berechnung der Tatsächlichen Werte nach dem Trinken
function berechne_GKW_Frau(){
  GKW = 1.055 * (-2.097 + 0.1069 * Koerpergroesse + 0.2466 * Koerpergewicht);
}

function berechne_GKW_Mann(){
  GKW = 1.055 *(2.447 - 0.09516 * Alter + 0.1074 * Koerpergroesse + 0.3362 * Koerpergewicht);

}

// Für Männer ergibt sich ein BAK: (0,8 x 20) / (1,055 x (2.447 - 0.09516 x 38 + 0.1074 x 179 + 0.3362 x 70)) = 0,36 Promille
//Für Frauen ergibt sich ein BAK: (0,8 x 20) / (1,055 x (-2.097+0.1069 x 165 + 0.2466 x 58)) = 0,51 Promille



function berechne_BAK(){
  BAK = (0.8 * A) / GKW;
  setGraphBAK();
}

function setGraphBAK(){
document.getElementById("graphBAK").setAttribute('fill','#333333');
document.getElementById("graphBAK").setAttribute('height','50');
document.getElementById("graphBAK").setAttribute('width', BAK*100);

}


function getA(){

  let alkoholgehalt = document.querySelectorAll('#getraenkeListe');
  let metrik = document.querySelectorAll('#metrik');
  let menge = document.querySelectorAll('#menge');

 alert("Größe: " + Koerpergroesse);
 alert("Alter: " + Alter);
 alert("Gewicht: " + Koerpergewicht);
 alert("Geschlecht: " + Geschlecht);


 for(var i = 0; i < metrik.length; i++){
   berechne_A(alkoholgehalt[i].id,alkoholgehalt[i].value,metrik[i].value,menge[i].value, i);
   A +=  A_neu;
 }

alert("all drinks alkoholgehalt: " + A);

}

function berechne_A(Alkoholsorte, alkoholgehalt, metrik, menge , i){
alert("alkoholgehalt: " + alkoholgehalt);
alert("metrik: " + metrik);
alert("Gewählte menge: " + menge);


   if(metrik == "cl"){
     menge = menge * 10;
   }
   if(metrik == "l"){
     menge = menge * 1000;
   }
   alert ("Menge in ml: " + menge);
   A_neu = menge * alkoholgehalt;
   Getränke_Liste_Array[i] = new Array(Alkoholsorte, alkoholgehalt, menge, A_neu);
    //A_neu ist alk-gehalt aufgerechnet auf die Menge

}
