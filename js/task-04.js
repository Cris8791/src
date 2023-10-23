// Exercițiul 4
// Contorul este format dintr-un tag span și două butoane care, atunci când sunt apăsate, ar trebui să-și mărească sau scadă valoarea cu unu.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului și asignați-i valoarea 0 pentru început.
// Adăugați click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
// Actualizați interfața cu noua valoare a variabilei counterValue.

// obtin referinta la elementul "value"
const valueElement = document.getElementById("value");

// obtin referintele la butoanele de incrementare și decrementare
const incrementButton = document.querySelector(
  "button[data-action='increment']"
);
const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);

// declarare variabila counterValue și initializare cu valoarea 0
let counterValue = 0;

// adaugare eveniment pentru butonul de incrementare
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});

// adaugare eveniment pentru butonul de decrementare
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});

// functie pt actualizare valoare afisata
function updateValue() {
  valueElement.textContent = counterValue;
}
