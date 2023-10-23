// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Exercițiul 9
// Scrieți un script care schimbă culorile de fundal al elementului <body>, prin stiluri inline, atunci când se face click pe button.change-color și afișați valoarea culorii în span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Pentru a genera o culoare aleatorie, folosiți getRandomHexColor.

// obtinere referinta la buton si la span pentru afisarea culorii
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// adaugare ascultator de eveniment pt clic pe buton
changeColorButton.addEventListener("click", function () {
  // obtinere culoare aleatorie folosind funcția getRandomHexColor
  const randomColor = getRandomHexColor();

  // actualizare culoare de fundal a elementului <body>
  document.body.style.backgroundColor = randomColor;

  // afisare valoare culore în span.color
  colorSpan.textContent = randomColor;
});

// Functie pt generarea unei culori hexadecimale aleatorii
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
