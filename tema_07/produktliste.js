const myCategory = new URLSearchParams(window.location.search).get("category");

const produktContainer = document.querySelector(".produkt-container");
let overskrift = document.querySelector("h2");
overskrift.innerHTML = myCategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `<article class="product">
            ${
              product.discount > 0
                ? `<div class="badge discount"}">-${product.discount},-</div>`
                : ""
            }

            ${
              product.soldout > 0
                ? `<div class="badge sold-out">UDSOLGT</div>`
                : ""
            }          

          <img src="https://kea-alt-del.dk/t7/images/webp/640/${
            product.id
          }.webp" alt="trøje" />
          <p>
            <b>${product.articletype}</b><br />



   ${
     product.discount > 0
       ? `<span class="prev-price">DKK ${product.price},-</span><br />`
       : ""
   }              <span class="current-price">${
          product.price - product.discount
        },-</span><br />
            <a href="product.html?id=${product.id}">Read More</a>
          </p>
        </article>`
    )

    .join("");
  produktContainer.innerHTML = markup;
}
