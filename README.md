# don-t-drink-and-drive Doocumentation

## index

  * Probleme und Einstufung der Probleme
  * index.html
    * Funktion
  * script.js
    * Funktion
  * style.css
    * Funktion
  * Aufgabenverteilung
  * Zeitplanung


## Probleme und Einstufung der Probleme

|                                                     |niedrig|mittel| hoch |gelöst|
|:---------------------------------------------------:|:-----:|:----:|:----:|:----:|
|Veränderung des Styles von Elementen                 |   X   |      |      |   X  |
|zweiter Tab war unter erstem Tab immer sichtbar      |       |   X  |      |   X  |
|visible setzen im JavaScript funktioniert nicht      |   X   |      |      |   X  |
|Getränke container hinzufügen                        |       |      |   X  |   X  |
|Getränke dynamisch hinzufügen (1)                    |       |      |   X  |   X  |
|Aktive Tabs farblich hinterlegen                     |   X   |      |      |      |

  (1) Trotz viel Aufwand konnte das Problem nicht mittels php gelöst werden und musste hartgecoded hinzugefügt werden, da sonst die ganze Webseite nicht funktioniert hätte.


## index.html (Model)
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


## style.css (View)
### Funktion

Das CSS File ist für die Formatierung der Webseite zuständig. Wie bereits in der Planung haben wird uns farblich für Mint und Pink und die Schriftart Arial entschieden.




## script.js (Controller)
### Funktion

Im JavaScript erfolgt die Berechnun des Alkoholgehalts im Blut. Dafür müssen die Inputs vom HTML-File übergeben werden. Mithilfe der Watson-Formel wird dann der Alkoholgehalt ermittelt.
Für die Berechnung mittels Watson-Formel muss zwischen Mann und Frau unterschieden werden, da Alkohol bei beiden Geschlechtern unterschiedlich verarbeitet wird.  



## Aufgabenverteilung

|                                                     |    Bearbeiter    |
|:---------------------------------------------------:|:----------------:|
|HTML                                                 |   Maria Seiser   |
|HTML                                                 |  Katharina Jank  |
|JavaScript                                           |   Tamara David   |
|CSS                                                  |   Maria Seiser   |
|Dokumentation                                        |  Katharina Jank  |
|Präsentation                                         |  Katharina Jank  |


## Zeitplanung

|  geplanter Zeitraum  |        Aufgabe                | tatsächlicher Zeitraum  |
|:--------------------:|:-----------------------------:|:-----------------------:|
| KW 45                | Anfertigung Projektplan       | KW 45                   |
| 18.11.2019           | Präsentation Projektplan      | 18.11.2019              |
| KW 46                | Start Implementierung         | 8.12.2019               |
| KW 1 (2020)          | Testphase                     | KW 2                    |
| 12.01.2020           | Fertigstellung Präsentation   | 12.1.2020               |
| KW 3                 | Präsentation Demo             | KW 3                    |
