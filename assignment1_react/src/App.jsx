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
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
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
      {/* <ul>
        {products2.map((products2) => (
          <li key={products2.id}>
            {products2.name} - ${products2.price}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ProductList;

