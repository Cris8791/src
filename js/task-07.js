// Exercițiul 7
// Scrieți un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) și modifică stilurile inline al span#text prin actualizarea proprietății font-size. Ca rezultat, atunci când glisați scrollbar-ul, dimensiunea textului se va schimba.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

// obtinere referinte la elementele input și span
const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

// adaugare ascultător pentru evenimentul "input" pe input
fontSizeControl.addEventListener("input", function () {
  // obtinere valoare curenta a input-ului
  const fontSizeValue = fontSizeControl.value;

  // actualizare stil inline al elementului span pentru a schimba dimensiunea textului
  textSpan.style.fontSize = fontSizeValue + "px";
});
