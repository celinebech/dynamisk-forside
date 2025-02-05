const myCatergory = new URLSearchParams(window.location.search).get("category");

const listContainer = document.querySelector(".grid-container");

console.log("hello?");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then(showCategories);

function showCategories(categories) {
  console.log(categories);

  const markup = categories
    .map(
      (category) =>
        `<div class= "category">
    <a href="produktliste.html?category=${category.category}">${category.category}</a>
   </div>
    `
    )
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}
