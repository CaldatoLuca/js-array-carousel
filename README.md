# Carosello News

_HTML+css+js_

Consegna:

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1

Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

MILESTONE 2

Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

BONUS 1:

Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

BONUS 2:

Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

BONUS 3:

Al click sulla thumbnail, viene visualizzata l'immagine selezionata;

## Indice

- [Scomposizone del problema](#scomposizione-del-problema)
- [Soluzione](#soluzione)

### Scomposizione del problema

1. Creare un array con le stringhe dei nomi delle immagini

2. creare la variabile che si collega all' elemnto HTML che contiene le immagini

3. Creare un ciclo `for` per inserire nell' HTML le immagini (`.innerHTML`) o (`.append`)

4. Creo nel ciclo l' elemento div (a cui dare la classe item) e l' elemento img (a cui dare un `src` in base al suo nome)

5. Inserisco img in item e, succesivamente, item nel contenitore di immagini

6. Cambiare (tramite evento click) la posizione della classe `.active` lungo l' array per far avvenire il cambio di immagine al click

   NB
   raccogliere tutte le immagini in una variabile dopo il ciclo `document.querySelectorAll(".classe");` (tutti gli elementi con .classe)
   prendere entrambe le freccie con variabili nel mio js e farci due eventi diversi (eventListener)
   fare l' operazione opposta per la freccia che porta all' immagine precendente
