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

2. creare la variabile che si collega all' elemnto HTML che contiene l' immagine

3. Creare un ciclo `for` per inserire nell' HTML le immagini (`.innerHTML`) o (`.append`)

4. Creo nel ciclo l' elemento div (a cui dare la classe item) e l' elemenbto img (a cui dare un `src` in base al suo nome)

5. Inserisco img in item e, succesivamente, item nel contenitore di immagini

6. Cambiare (tramite evento click) la posizione della classe `.active` lungo l' array per far avvenire il cambio di immagine al click

   NB fare l' operazione opposta per la freccia che porta all' immagine precendente
