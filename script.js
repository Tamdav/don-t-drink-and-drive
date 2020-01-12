var Geschlecht_zeile document.getElementById("geschlecht");
var Geschlecht = Geschlecht_zeile.options[Geschlecht_zeile.selectedIndex].text;

var Körpergröße = document.getElementById("groesse").innerHTML;
var Körpergewicht = document.getElementById("gewicht").innerHTML;
var Alter = document.getElementById("gesalterchlecht").innerHTML;
var Trinkstart = document.getElementById("anfang").innerHTML; //Nicht notwendig
var Trinkende = document.getElementById("ende").innerHTML;
var A = 0;

var Tinkeende_hours = Trinkende.getHours();
var Tinkeende_minutes = Trinkende.getMinutes();

var Uhrzeit = new Date();
var Uhrzeit_Hours = Uhrzeit.getHours()
var Uhrzeit_Minutes = Uhrzeit.getMinutes();

//Drinks Section erweitern
var Getränk_hinzufügen = document.querySelector('plus-getraenk');

var Drinks_Daten = document.getElementById('drinks-daten');
var i = 0;

Getränk_hinzufügen.onclick = function duplicate(){
  var clone = Drinks_Daten.cloneNode(true);
  clone.id = "duplicater" + ++i;
  Drinks_Daten.parentNode.appendChild(clone);
}

//Rechenstart
var Berechne_Button = document.querySelector('berechne-daten');

Berechne_Button.onclick = function(){
  is_checked();
  check_all_values();

//A muss noch beachtet werden


  var GKW;
  if(Geschlecht == "weiblich"){
    GKW = berechne_GKW_Frau(A);
  }
  if(Geschlecht == "männlich"){
    GKW = berechne_GKW_Mann(A);
  }
  var BAK_Anfangswert = berechne_BAK(A, GKW);
  var BAK_Restalkohol = berechne_aktuellen_Bak_Wert(BAK_Anfangswert);

}

//Check ob alle Daten vorhanden
function check_all_values(){
  is_value(Körpergröße);
  is_value(Körpergewicht);
  is_value(Alter);
}

function is_value(Feld){
  if (document.formular.feld.value == ""){
    alert('Bitte fülle das Feld aus: ' + Feld);
    exit();
}

function is_checked(){
  if (document.formular.check_disclaimar.checked == false){
    alert('Bitte Verifiziern Sie, dass der Hinweis gelesen wurde, um Ergebnis zu erhalten!');
    exit();
  }
}


//Berechnung der Tatsächlichen Werte nach dem Trinken
function berechne_GKW_Frau (A){
   var GKW = -2,097 + 0,1069 * Körpergröße + 0,2466 * Körpergewicht;
   return GKW;
}

function berechne_GKW_Mann(A){
  var GKW = 2,447 - 0,09516 * Alter + 0,1074 * Körpergröße + 0,3362 * Körpergewicht;
  return GKW;
}

function berechne_BAK(A,GKW){
  return (0,8 * A) / GKW;
}

//Berechnung des Wertes nach einer bestimmten Zeitpunkt
//aktuelle Blutalkoholkonzentration (BAK) (Restalkohol) =
// Blutalkoholkonzentration (BAK) – (Anzahl der Stunden x 0,15)

function berechne_aktuellen_BAk_Wert(BAK_Anfangswert){
  var Stunden = clac_Timedifferenz();
  var BAK = BAK_Anfangswert - (Stunden * 0,15);
  return BAK;
}

function clac_Timedifferenz(){
  var jetzt = Uhrzeit.getTime();
  var ende = Trinkende.getTime();
  var Differenz = jetzt - ende;

  return Differenz * 	2.7778E-8;
}
