const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Scrieți un script care pentru fiecare element al matricei ingredients:

// Va crea un element <li> separat. Asigurați-vă că folosiți metoda document.createElement().
// Adăugați numele ingredientului ca conținut text.
// Adăugați clasa item la element.
// Apoi va insera toate elementele <li> dintr-o singură operație în lista ul#ingredients.

//  referinta spre lista <ul> cu ID-ul "ingredients"
const ulIngredients = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  // creare element <li>
  const liElement = document.createElement("li");

  // adaugare clasa "item" la elementul <li>
  liElement.classList.add("item");

  // adaugare nume ingredient ca text
  liElement.textContent = ingredient;

  // Adăugați elementul <li> în lista <ul>
  ulIngredients.appendChild(liElement);
});
