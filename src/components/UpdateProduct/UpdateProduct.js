import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
  const {id} = useParams();
  const [product, setProduct] = useState({name: '', detail: '', price: '', photo: ''});
  useEffect(()=>{
    const url = `http://localhost:5000/products/${id}`;
    fetch(url).then(res=>res.json()).then(data => setProduct(data))
  }, [])
  const handleNameChange = e => {
    const updatedName = e.target.value;
    const updatedProduct = {name: updatedName, detail: product.detail,price: product.price,photo: product.photo}
    setProduct(updatedProduct)
  }
  const handleDetailChange = e => {
    const updatedDetail = e.target.value;
    const updatedProduct = {name: product.name, detail: updatedDetail,price: product.price,photo: product.photo}
    setProduct(updatedProduct)
  }
  const handlePriceChange = e => {
    const updatedPrice = e.target.value;
    const updatedProduct = {name: product.name, detail: product.detail,price: updatedPrice,photo: product.photo}
    setProduct(updatedProduct)
  }
  const handlePhotoChange = e => {
    const updatedPhoto = e.target.value;
    const updatedProduct = {name: product.name, detail: product.detail,price: product.price,photo: updatedPhoto}
    setProduct(updatedProduct)
  }
  const handleUpdateUser = e => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    e.preventDefault();
  }
  return (
    <div>
      <section class="max-w-4xl mt-16 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Update Product</h2>
          
          <form onSubmit={handleUpdateUser}>
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                      <label class="text-gray-700 dark:text-gray-200">Name</label>
                      <input onChange={handleNameChange} value={product.name} id="text" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                  </div>

                  <div>
                      <label class="text-gray-700 dark:text-gray-200">Details</label>
                      <input onChange={handleDetailChange} value={product.detail} id="text" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                  </div>

                  <div>
                      <label class="text-gray-700 dark:text-gray-200">Price</label>
                      <input onChange={handlePriceChange} value={product.price} id="text" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                  </div>

                  <div>
                      <label class="text-gray-700 dark:text-gray-200">photo URL
</label>
                      <input onChange={handlePhotoChange} value={product.photo} id="" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                  </div>
              </div>

              <div class="flex justify-end mt-6">
                  <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
              </div>
          </form>
      </section>
    </div>
  );
};

export default UpdateProduct;