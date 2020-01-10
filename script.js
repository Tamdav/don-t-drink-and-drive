var Geschlecht_zeile document.getElementById("ddlViewBy");
var Geschlecht = Geschlecht_zeile.options[Geschlecht_zeile.selectedIndex].text;

var Körpergröße = document.getElementById("groesse").innerHTML;
var Körpergewicht = document.getElementById("gewicht").innerHTML;
var Alter = document.getElementById("gesalterchlecht").innerHTML;
var Trinkstart = document.getElementById("anfang").innerHTML;
var Trinkende = document.getElementById("ende").innerHTML;
var A = 0;
var Berechne_Button = document.querySelector('berechne-daten');


Berechne_Button.onclick = function(){
  is_checked();
  check_all_values();
  
}

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

function berechne_GKW_Frau (A){
   var GKW = -2,097 + 0,1069 * Körpergröße + 0,2466 * Körpergewicht;
   var BAK = berechne_BAK(A, GKW);
   return BAK;
}

function berechne_GKW_Mann(A){
  var GKW = 2,447 - 0,09516 * Alter + 0,1074 * Körpergröße + 0,3362 * Körpergewicht;
  var BAK = berechne_BAK(A, GKW);
  return BAK;
}

function berechne_BAK(A,GKW){
  return (0,8 * A) / GKW;
}
