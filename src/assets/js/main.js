import {PageFlip} from 'page-flip';

var tempo = function() {
  document.addEventListener('DOMContentLoaded', function() {

    var lol = window.innerWidth * .43;
    var lol2 = window.innerHeight * .42;
  const pageFlip = new PageFlip(
      document.getElementById("demoBookExample"),
      {
          width: lol/2, // base page width
          height: lol2, // base page height

          size: "stretch",
          // set threshold values:
          minWidth: 0,
          maxWidth: lol,
          minHeight: 420,
          maxHeight: 1350,

          maxShadowOpacity: 0.2, // Half shadow intensity
          showCover: true,
          mobileScrollSupport: false // disable content scrolling on mobile devices
      }
  );

    var botonTelefono = document.getElementsByClassName("botonTelefono");
    for(let i = 0; i < botonTelefono.length; i++)
     {
         botonTelefono[i].addEventListener("click", function() {
             var pagina = parseInt(botonTelefono[i].id.replace("pag", ""));
             pageFlip.flip(pagina, 'top');
         });
     }

  // load pages
  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  document.querySelector(".page-total").innerText = pageFlip.getPageCount();
  document.querySelector(
      ".page-orientation"
  ).innerText = pageFlip.getOrientation();

  document.querySelector(".btn-prev").addEventListener("click", () => {
      pageFlip.flipPrev(); // Turn to the previous page (with animation)
  });

  document.querySelector(".btn-next").addEventListener("click", () => {
      pageFlip.flipNext(); // Turn to the next page (with animation)
  });

  // triggered by page turning
  pageFlip.on("flip", (e) => {
      document.querySelector(".page-current").innerText = e.data + 1;
  });

  // triggered when the state of the book changes
  pageFlip.on("changeState", (e) => {
      document.querySelector(".page-state").innerText = e.data;
  });

  // triggered when page orientation changes
  pageFlip.on("changeOrientation", (e) => {
      document.querySelector(".page-orientation").innerText = e.data;
  });
  
});
}


var funcion = new tempo();

export { funcion };