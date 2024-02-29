const e=document.getElementById("app");(async()=>{let t=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10"),a=await t.json();console.log(a);let s=a?.map(e=>`
    <article class="Card">
      <img src="${e.images[0]}">
      <h2>
        ${e.title} <small>Precio: $ ${e.price}</small>
      </h2>
    </article>
    `).join(""),c=document.createElement("section");c.classList.add("Items"),c.innerHTML=s,e.appendChild(c)})();
//# sourceMappingURL=index.cfa30e5f.js.map
