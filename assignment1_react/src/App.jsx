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
     name: 'Milk Pack Small',
     price: 100
   },
  {
     id: 2,
     name: ' Milk Pack Medium',
     price: 150
     },
    {
    id: 3,
    name: 'Milk Pack Large',
    price: 250 },
    {
      id: 3,
      name: 'Tapal Medium',
      price: 150 },
      {
        id: 3,
        name: 'Tapal Large',
        price: 250 },

   
  // Add more products as needed
];

const products3 = [
  {
     id: 1,
     name: 'Pepsi 250ml',
     price: 80
   },
  {
     id: 2,
     name: ' Pepsi 500ml',
     price: 130
     },
    {
    id: 3,
    name: 'Pepsi 1L',
    price: 170 },
    {
      id: 3,
      name: 'Pepsi 1.5L',
      price: 210 },
      {
        id: 3,
        name: 'Pepsi 2.3L',
        price: 260 },

   
  // Add more products as needed
];



const ProductList = () => {
  return (
    <div>
      <h1>ABC BAKERY</h1>
      <div className='flex'>
        <table>
          <thead>
            <tr className='empty'>
              <td></td>
              <td>BISCUITS</td>
              <td></td>
              </tr>
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
      
        <table>
          <thead>
            <tr className='empty'>
              <td></td>
              <td>MILK</td>
              <td></td>
              </tr>
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

 {/* this is comment */}
      
 <table>
          <thead>
            <tr className='empty'>
              <td></td>
              <td>COLD DRINKS</td>
              <td></td>
              </tr>
            <tr>
              <th>Serial.No</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
        {products3.map((data,ind) => (
          <tr key={ind}>
             <td>{ind + 1}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
             
          </tr>
        ))}
        </tbody>
         </table>

         </div>
    </div>
  );
};

export default ProductList;

