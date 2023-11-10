# Carosello News

_HTML+css+js_

Consegna:

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1

Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

MILESTONE 2

Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

## Indice

- [Scomposizone del problema](#scomposizione-del-problema)
- [Soluzione](#soluzione)

### Scomposizione del problema

1. Creare un array con le stringhe dei nomi delle immagini

2. Creare un ciclo `for` per inserire nell' HTML le immagini (`.innerHTML`)

3. creare l' elemento HTML e collegarlo al contenitore delle immagini, tramite `.innerHTML` inserire le varie immagini al suo interno a ogni giro del ciclo

4. Asseganre alla prima immagine la classe `.active` in modo da averla visibile

5. Cambiare (tramite evento click) la posizione della classe `.active` lungo l' array per far avvenire il cambio di immagine al click

   NB fare l' operazione opposta per la freccia che porta all' immagine precendente
