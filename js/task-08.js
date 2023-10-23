// Exercițiul 8
// Scrieți un script de control al formularului de login.

// Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
// La trimiterea formularului, pagina nu trebuie să se reîncarce.
// Dacă formularul are câmpuri goale, afișați un alert care avertizează că toate câmpurile trebuie completate.
// Dacă utilizatorul a completat toate câmpurile și a trimis formularul, colectați valorile câmpului într-un obiect în care numele câmpului va fi numele proprietății, iar valoarea câmpului va fi valoarea proprietății. Pentru a accesa elementele formularului, folosiți proprietatea elements.
// Afișați obiectul cu datele introduse în consolă și ștergeți valorile câmpurilor din formular, folosind metoda reset.

// obtinere referinta la formular
const loginForm = document.querySelector(".login-form");

// adaugare ascultator pentru evenimentul "submit" al formularului
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Previne reincarcarea paginii la trimiterea formularului

  // obtinere referinta la elementul de e-mail și la elementul de parola
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // verificare daca campurile sunt goale
  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Toate câmpurile trebuie completate.");
  } else {
    // colectare valori câmp intr-un obiect
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    // afisare obiect cu datele introduse in consola
    console.log(formData);

    // resetare valori câmpuri din formular
    loginForm.reset();
  }
});
