  var Geschlecht = document.getElementById("geschlecht").value;
  var Körpergröße = document.getElementById("groesse").value;
  var Körpergewicht = document.getElementById("gewicht").value;
  var Alter = document.getElementById("alter").value;
 // var Trinkstart = document.getElementById("anfang").innerHTML; //Nicht notwendig
 // var Trinkende = document.getElementById("ende").innerHTML;
  var A = 0;
  var GKW = 0

  var newId = 0;
  var clone;
  var anzahl_clones = 0;
 //
 // var Tinkeende_hours = Trinkende.getHours();
 // var Tinkeende_minutes = Trinkende.getMinutes();
 //
 // var Uhrzeit = new Date();
 // var Uhrzeit_Hours = Uhrzeit.getHours()
 // var Uhrzeit_Minutes = Uhrzeit.getMinutes();

 //var Berechne_Btn = document.querySelector('berechneDaten').addEventListener('click',validate);



 function duplicate(){

 let clone = document.querySelector('#drinks-listen0').cloneNode( true );

 getränkeListe.push(clone.firstElementChild.firstElementChild.nextElementSibling);

 mengen_liste.push(clone.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling);
 metrik_liste.push(clone.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling);
 // Change the id attribute of the newly created element:
 clone.setAttribute( 'drinks-listen', ++newId );

 alert("duplicate");
 // Append the newly created element on element p
 document.querySelector('#duplication_model').appendChild( clone );


 }

 function validate(){
   is_checked();

   getA();
   //A muss noch beachtet werden
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


   /* for(var i = 0; i = newId; i++){
      if(i==0){

      }
    }*/
   var BAK_Anfangswert = berechne_BAK();
   // var BAK_Restalkohol = berechne_aktuellen_Bak_Wert(BAK_Anfangswert);

   alert("GKW: " + GKW);

   alert("BAK: " + BAK_Anfangswert);
 }
    //Berechnung der Tatsächlichen Werte nach dem Trinken
  function berechne_GKW_Frau(){
    GKW = -2,097 + (0,1069 * Körpergröße) + (0,2466 * Körpergewicht);
  }

  function berechne_GKW_Mann(){
    GKW = 2,447 - (0,09516 * Alter) + (0,1074 * Körpergröße) + (0,3362 * Körpergewicht);

  }

  function berechne_BAK(){
    BAK_Anfangswert = (0,8 * A) / GKW;
  }

  function getA(){

   for(var i = 0; i <= anzahl_clones; i++){
     if(i==0){
       alert("Here");
       let parent = document.getElementById('drinks-listen0');
       alert("Here");
       let drinks_liste = parent.firstChild();
       alert("Here");
       let mengen_angabe = drinks_liste.nextSibling();
       alert(parent);
       alert(mengen_angabe);
       var metrik = document.getElementById('metrik').value;
       var menge = document.getElementById('menge').innerHTML;

       berechneA(alkoholgehalt,metrik,menge);
     } else {
       var liste = document.getElementById('clone'+(i-1));

       //TODO

     }
     A += A_current;
     alert(A);

   }

 }

 function berechneA( ag, metrik, menge){
    if(menge == 0){
      A_current = 0;
      return;
    }
    if(metrik == "cl"){
      menge = menge * 10;
    }
    if(metrik == "l"){
      menge = menge * 1000;
    }
    A_current = menge * ag;
    alert(A_current);
    return;
 }
