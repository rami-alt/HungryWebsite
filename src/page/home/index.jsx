import React, { useState } from 'react';
import './home.css';
import Card from '../../component/card';
import { useEffect } from 'react';
const Home = () => {
  const [products,setProducts]=useState([]);
  //www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
  useEffect(() => {
     fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((res) => res. json())
    .then((data) =>{setProducts(data.categories);    
  })
    .catch((err)=>console.log("err"))},[]);
  return (

      <div className="product-list">{
        
products.map((product)=>{
  return <Card product={product} key={product.idCategory}></Card>
})
        }
      </div>
  );
};

export default Home;
