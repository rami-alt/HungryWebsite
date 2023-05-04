import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Category from "../category";
// idCategory":"1","strCategory":"Beef",
// "strCategoryThumb":
// "https:\/\/www.themealdb.com\/images\/category\/beef.png",

const Card = (props) => {
  const { product } = props;

  return (
    <Link to={`/Category/${product.strCategory}`} >

        <div className="card">
        <div className="card-img">
          <img src={product.strCategoryThumb} />
        </div>
        <div>
          <h2>{product.strCategory}</h2>
        </div></div>
      
    </Link>
  );
};
export default Card;
