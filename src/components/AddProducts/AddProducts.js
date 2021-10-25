import React, { useRef } from 'react';

const AddProducts = () => {
  const nameRef = useRef();
  const detailRef = useRef();
  const priceRef = useRef();
  const photoRef = useRef();

  const handleAddUser = e => {
    const name = nameRef.current.value; 
    const detail = detailRef.current.value; 
    const price = priceRef.current.value; 
    const photo = photoRef.current.value; 

    const newProduct = {name, detail, price, photo};

    fetch('http://localhost:5000/products', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data=>{
      if(data.insertedId){
        alert('product added Successfully')
        e.target.reset();
      }
    })
    e.preventDefault();
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <form onSubmit={handleAddUser}>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Product to <b>My Shop</b></h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div className="relative flex-grow w-full">
                <label htmlFor="text" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="text" name="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ref={nameRef} />
              </div>
              <div className="relative flex-grow w-full">
                <label htmlFor="text" className="leading-7 text-sm text-gray-600">Details</label>
                <input type="text" id="text" name="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ref={detailRef} />
              </div>
              <div className="relative flex-grow w-full">
                <label htmlFor="text" className="leading-7 text-sm text-gray-600">Price</label>
                <input type="text" id="text" name="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ref={priceRef} />
              </div>
              <div className="relative flex-grow w-full">
                <label htmlFor="text" className="leading-7 text-sm text-gray-600">photo URL</label>
                <input type="text" id="text" name="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ref={photoRef} />
              </div>
              <input className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" value="Add" />
            </div>
          </div>
        </form>
    </section>
    </div>
  );
};

export default AddProducts;