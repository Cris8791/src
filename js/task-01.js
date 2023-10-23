// Scrieți un script care:

// Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
// Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).
// Ca rezultat, în consolă vor fi afișate astfel de mesaje:

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// numar și afisez numărul total de categorii din ul#categories
const categoriesList = document.getElementById("categories");

// Lista cu toate elementele li cu clasa "item"
const categoryItems = categoriesList.querySelectorAll("li.item");
// asta e pt mine:
console.log(categoryItems);

// nr total de categorii
const totalCategories = categoryItems.length;
console.log("Number of categories: " + totalCategories);

// parcurg fiecare categorie
categoryItems.forEach(function (category) {
  //  titlul categoriei
  const categoryTitle = category.querySelector("h2").textContent;
  console.log("Category: " + categoryTitle);

  // nr elemente din categorie
  const categoryElements = category.querySelectorAll("ul li").length;
  console.log("Elements: " + categoryElements);
});
