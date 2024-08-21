import React from 'react';

const products = [
  { 
    id: 1,
    name: 'Zeera Plus',
    price: 40
   },
  {
    id: 2,
    name: 'Peanuts Pik',
    price: 40
  },
  { id: 3,
    name: 'Super',
    price: 40
  },
  { id: 4,
    name: 'Party',
    price: 40
  },
  { id: 3,
    name: 'Gala',
    price: 40
  },
  // Add more products as needed
];

const products2 = [
  {
     id: 1,
     name: 'Tapal Small',
     price: 100
   },
  {
     id: 2,
     name: 'Tapal Medium',
     price: 150
     },
    {
    id: 3,
    name: 'Tapal Large',
    price: 200 },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div>
      <h1>ABC BAKERY</h1>
        <h3>BISCUITS</h3>
        <table>
          <thead>
            <tr>
              <th>Serial.No</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
        {products.map((data,ind) => (
          <tr key={ind}>
             <td>{ind + 1}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
          </tr>
        ))}
        </tbody>
         </table>
    
      {/* this is comment */}
      
      <h3>MILK</h3>
        <table>
          <thead>
            <tr>
              <th>Serial.No</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
        {products2.map((data,ind) => (
          <tr key={ind}>
             <td>{ind + 1}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
          </tr>
        ))}
        </tbody>
         </table>
    </div>
  );
};

export default ProductList;

