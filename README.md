# don-t-drink-and-drive Doocumentation



## index.html
### Funktion

Im html wird unsere Seite in verschiedene Teile unterteilt.
Ab beginn steht unser Header mit dem "Titel", verlinkungen mit dem css File und Sonzerzeichen werden frei gegeben.

Zu beginn des Body wird der Name der Webseite angezeigt und darunter werden die Reiter Info, Berechnen und Ergebnis angezeit. Mittels verlinkung kann durch darauf klicken auf der Seite navigiert werden. Die erste Sektion "Info" besteht aus weiteren Einteilungen:

  * Was ist ein Promille-Rechner?
  * Wie wird der PRomillegehalt berechnet?
  * disclaimar

In diesen Sectionen wird kurz beschrieben worum es sich bei unserer Seite handelt, wie berechnet wird und der Haftungsausschluss.

Die Berechnung ist etwas aufwendiger aufgebaut. Im ersten Kasten werden die persönlichen Daten, die für die Berechnung notwendig sind abgefragt. Die Abfragen werden als Input für die Berechnung im javascript benötigt.
Für eine genauere Berechnung wird ebenfalls der Beginn und das Ende des Alkoholkonsums abgefragt. Dies führt zu einem aussagekräftigerem Ergebnis.
In der dritten Kasten muss das Getränk und die ungefähre Menge angegeben werden. Wenn mehr als ein Getränk getrunken wurde, kann ein weiteres Eingabefeld mit dem Button *plusGetraenk* eingefügt werden

In der letzten Section dem Ergebnis, wird das Ergebnis der Berechnun ausgegeben. Das Ergebnis in einem *Graphen* angezeigt.

Funktion *check_all_values* und *is_valid* kontrolliert ob etwas ausgefüllt wurde und ob es im vorgegebenen Bereich liegt.

Die Funktion *is_checked* kontrolliert ob der User die Checkbox angekreuzt hat. Wenn dies nicht geschehen ist soll kein Ergebnis berechnet werden können.

Funktion *berechne* schaut welche der beiden Formeln anhand des Inputs verwendet werden soll.

Funktion *berechne_GKW_Frau*, *berechne_GKW_Mann*, *berechne_BAK* Formeln für die Berechnung.

### geringe Probleme

schwierigkeiten beim verändern von styles von Elementen
Dinge konnten im javascript nicht visible gesetzt werden
aktive taps konnten nicht Farblich anders hinterlegt werden




## style.css





## script.js
