"use.strict";

// variabili
const imagesList = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const imagesContainer = document.querySelector(".items");
const thumbnailContainer = document.querySelector(".all");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let counter = 0;

//!ciclo per assegnaziojne immagini all' elemento HTML .items
for (let i = 0; i < imagesList.length; i++) {
  // creo l'elemento blocco immagine
  const item = document.createElement("div");
  item.classList.add("item");
  //se è la prima img inserisco anche la classe active per renderla visibile
  if (i === 0) {
    item.classList.add("active");
  }

  //creo l'elemento immagine e assegno src e alt
  const img = document.createElement("img");
  img.src = `./img/${imagesList[i]}`;
  img.alt = `Immagine ${i + 1}`;

  //inserisco le img in item
  item.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;

  //inserisco item nel mio contenitore di immagini
  imagesContainer.append(item);
}

//!ciclo per assegnaziojne immagini all' elemento HTML .all
for (let i = 0; i < imagesList.length; i++) {
  // creo l'elemento blocco immagine
  const item = document.createElement("div");

  //creo l'elemento immagine e assegno src e alt
  const img = document.createElement("img");

  if (i === 0) {
    img.classList.add("thumbnail-active");
  }

  img.src = `./img/${imagesList[i]}`;
  img.alt = `Immagine ${i + 1}`;

  //inserisco le img in item
  item.append(img);

  //inserisco item nel mio contenitore di immagini
  thumbnailContainer.append(item);
}

//inizializzo una variabile che raccoglie tutte le mie immagini .items (simile ad un array)
const images = document.querySelectorAll(".item");
//inizializzo una variabile che raccoglie tutte le mie immagini di .all
const imagesAll = document.querySelectorAll(".all img");

//! click su aventi
next.addEventListener(`click`, function () {
  if (counter < images.length - 1) {
    // rimuovo le classi active
    images[counter].classList.remove("active"); //immagine principale
    imagesAll[counter].classList.remove("thumbnail-active"); //immagine thumbnail
    counter++;
    // aggiungo le classi active al successivo
    images[counter].classList.add("active"); //immagine principale
    imagesAll[counter].classList.add("thumbnail-active"); //immagine thumbnail
  } else if (counter === Number(images.length) - 1) {
    //resetto il contatore immagini se è arrivato all' ultima (ciclo infinito di click)
    images[counter].classList.remove("active");
    imagesAll[counter].classList.remove("thumbnail-active");
    counter = 0;
    images[counter].classList.add("active");
    imagesAll[counter].classList.add("thumbnail-active");
  }
});

prev.addEventListener(`click`, function () {
  if (counter > 0) {
    // rimuovo le classi active
    images[counter].classList.remove("active"); //immagine principale
    imagesAll[counter].classList.remove("thumbnail-active"); //immagine thumbnail
    counter--;
    // aggiungo le classi active al successivo
    images[counter].classList.add("active"); //immagine principale
    imagesAll[counter].classList.add("thumbnail-active"); //immagine thumbnail
  } else if (counter === 0) {
    //riporto al massimo il contatore immagini se è arrivato alla prima(ciclo infinito di click)
    images[counter].classList.remove("active");
    imagesAll[counter].classList.remove("thumbnail-active");
    counter = images.length - 1;
    images[counter].classList.add("active");
    imagesAll[counter].classList.add("thumbnail-active");
  }
});
