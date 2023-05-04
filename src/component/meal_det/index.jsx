import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./meal_det.css";
const Meal = () => {
  const params = useParams();
  const [meals, setMeals] = useState([]);
  const url = `www.themealdb.com/api/json/v1/1/lookup.php?i=${params.strCategory}`;
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.strCategory}`)
  .then(response => response.json())
  .then(data => setMeals(data.meals[0]))
  .catch(error => console.error(error));
  }, []);
  console.log(meals);


  return (  
    <div className="card-container">
     <div className="card">
    <img src={meals.strMealThumb} className="card-img"/>
    <h3>{meals.strMeal}</h3>
    <p>{meals.strInstructions}</p>
  </div>
</div>);
};
export default Meal;
