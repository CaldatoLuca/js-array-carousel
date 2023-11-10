// <!-- <div class="item active">
// <img src="./img/01.jpg" alt="" />
// </div> -->

"use.strict";

// variabili
const imagesList = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const imagesContainer = document.querySelector(".items");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

//!ciclo per assegnaziojne immagini all' elemento HTML
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

//inizializzo una variabile che raccoglie tutte le mie immagini .items (simile ad un array)
const images = document.querySelectorAll(".item");
prev.addEventListener(`click`, function () {
  images[0].classList.remove("active");
  images[1].classList.add("active");
});
