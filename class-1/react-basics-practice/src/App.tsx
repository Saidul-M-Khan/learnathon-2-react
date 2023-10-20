import { useEffect, useState } from 'react';
import './App.css'
import ProductList from './components/ProductList/ProductList'

function App() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => setProducts(data.products))
  }, []);

  console.log(products);

  return (
    <>
      <ProductList products={products} />
    </>
  )
}

export default App
