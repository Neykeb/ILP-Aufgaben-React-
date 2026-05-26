import { useState } from 'react'
import './App.css'

const productList = [
  {
    name: "iphone20",
    id: 1,
    price: 900,
    inStock: true,
  },
  {
    id: 2,
    name: "Samsung S30",
    price: 799,
    inStock: false,
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249,
    inStock: true,
  },
];

function ProductCard(props){
  
  console.log(props)

  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.name}</h2>
      <p>Name: {props.price}</p>
      <p>Name: {props.inStock ? 'ja': 'nein'}</p>
    </>
  );
}

function App() {
  return (
    <>
      {/* map(): gehe durch jedes Produkt im Array */}
      {productList.map((product) => {
        return (
          <ProductCard
            // key: gib React eine eindeutige ID für jedes Element
            key={product.id}
            // Props: sende Daten von App zu ProductCard
            name={product.name}
            price={product.price}
            inStock={product.inStock}
          />
        );
      })}
    </>
  );
}
export default App




