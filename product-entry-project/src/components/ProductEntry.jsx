import React, { useState } from 'react';
import '../App.css';

function ProductEntry() {
  let [productName, setProductName] = useState('');
  let [productPrice, setProductPrice] = useState('');
  let [productDesc, setProductDesc] = useState('');
  let [productCategory, setProductCategory] = useState('');
  let [stockQuantity, setStockQuantity] = useState('');
  let [imageURL, setImageURL] = useState('');
  let [arr, setArr] = useState([]);
  let [showProducts, setShowProducts] = useState(false);

  const handleAddProduct = () => {
    let productObj = {
      productName: productName,
      productPrice: productPrice,
      productDesc: productDesc,
      productCategory: productCategory,
      stockQuantity: stockQuantity,
      imageURL: imageURL
    };

    setArr([...arr, productObj]);

    // Reset the input fields
    setProductName('');
    setProductPrice('');
    setProductDesc('');
    setProductCategory('');
    setStockQuantity('');
    setImageURL('');
  };

  const handleShowProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div className='Container'>
      <div className='productForm'>
        <h1>Product List</h1>

        <input
          type="text"
          placeholder='Product Name'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          type="number"
          placeholder='Product Price'
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder='Product Description'
          value={productDesc}
          onChange={(e) => setProductDesc(e.target.value)}
        />

        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        >
          <option value="null">Select Option</option>
          <option value="food">Food</option>
          <option value="cloth">Cloth</option>
          <option value="homeware">Homeware</option>
          <option value="electronics">Electronics</option>
          <option value="education">Education</option>
        </select>

        <input
          type="text"
          placeholder='Stock Quantity'
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
        />

        <input
          type="text"
          placeholder='Image URL'
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />

        <button onClick={handleAddProduct}>Add Product</button>
        <button onClick={handleShowProducts}>{showProducts ? 'Hide' : 'Show'} All Products</button>

      </div>

      {showProducts && (
        <table className="productTable">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Description</th>
              <th>Product Category</th>
              <th>Stock Quantity</th>
              <th>Image URL</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((product, index) => (
              <tr key={index}>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>{product.productDesc}</td>
                <td>{product.productCategory}</td>
                <td>{product.stockQuantity}</td>
                <td><img src={product.imageURL}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

  );
}

export default ProductEntry;
