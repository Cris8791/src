// Exercițiul 5
// Scrieți un script care, atunci când se introduce un text în input#name-input (evenimentul input), înlocuiește valoarea lui span#name-output cu valoarea curentă din input#name-input. Dacă input-ul este gol, în acel span se va afișa "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// obtinere referinte la elementele de input și span
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// adaugare eveniment "input"
nameInput.addEventListener("input", function () {
  // obtinere valoare introdusă in input
  const inputValue = nameInput.value;

  // verificare dacă input este gol si actualizare text span
  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});
