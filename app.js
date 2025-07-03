// Wrap everything in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById('product-list');
      products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
          <h3>${product.name}</h3>
          <img src="${product.image}" width="150"/>
          <p>${product.description}</p>
          <p>₹${product.price}</p>
          <button onclick="addToCart('${product._id}', '${product.name}', ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(div);
      });
    });
});

// Define globally
function addToCart(id, name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ id, name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart`);
}