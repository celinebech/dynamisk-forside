let produktContainer = document.querySelector(".produkt-container");
const myProduct = new URLSearchParams(window.location.search).get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${myProduct}`)
  .then((response) => response.json())
  .then((data) => {
    produktContainer.innerHTML = `
 
 <section class="produkt-image product">
   <img src="https://kea-alt-del.dk/t7/images/webp/640/${myProduct}.webp" alt="FERRARI BLACK ZIP-UP" />
 
             ${
               data.discount > 0
                 ? `<div class="badge discount"}">-${data.discount}%</div>`
                 : ""
             }

            ${
              data.soldout > 0
                ? `<div class="badge sold-out">UDSOLGT</div>`
                : ""
            }   
 
 
 
   </section>

 <section class="produkt-info">
   <h1>Product Information</h1>
   <p><strong>Model name</strong><br />${data.articletype}</p>
   <p><strong>Color</strong><br />${data.basecolour}</p>
   <p><strong>Inventory number</strong><br />${myProduct}</p>
   <br />
   <br />




   ${
     data.discount < 0
       ? `<span class="prev-price">DKK ${data.price},-</span><br />`
       : ""
   }   
   
            <span class="current-price">${
              data.price - data.discount
            },-</span><br />

   <h1>Brand name</h1>
   <p>${data.brandname}</p>
 </section>

 <aside class="purchase-box">
   <h2>${data.productdisplayname}</h2>
   <label for="size">Choose a size</label>
   <select id="size">
     <option>S</option>
     <option>M</option>
     <option>L</option>
     <option>XL</option>
   </select>
   <button class="add-to-basket">Add to basket</button>
 </aside>
 
`;
  });
