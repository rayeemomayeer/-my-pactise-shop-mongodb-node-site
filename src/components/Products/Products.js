import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/products')
      .then(res=>res.json())
      .then(data=> setProducts(data))
  },[])
  const handleDeleteProduct = id => {
    const proceed = window.confirm('Are you Sure, you want to delete ?');
    if(proceed){
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          alert('deleted successfully');
          const remainingProducts = products.filter(product => product._id !== id);
          setProducts(remainingProducts);
        }
      })
    }
  }
  return (
    <div>
      <div className="bg-white">
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl tracking-tight text-gray-900 pb-4">Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
          products.map((product) => (
             <div key={product._id} className="max-w-xs mx-auto my-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                  <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">{product.name}</h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{product.detail}</p>
              </div>

              <img className="object-cover w-full h-48 mt-2" src={product.photo} alt="product" />

              <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                  <h1 className="text-lg font-bold text-white">$ {product.price}</h1>
                  <div>
                    <Link to={`/products/update/${product._id}`}><button className="mr-2 px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">edit</button></Link>
                    <button onClick={()=>handleDeleteProduct(product._id)} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">delete</button>
                  </div>
              </div>
          </div>
          ))
        }
        </div>
        </div>
        </div>
    </div>
  );
};

export default Products;