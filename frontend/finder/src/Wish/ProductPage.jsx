import React from 'react';

const ProductPage = ({ products, addToWishlist }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;