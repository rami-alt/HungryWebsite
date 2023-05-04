import React from "react";
import { Link } from 'react-router-dom';
import { useState ,useEffect,} from "react";
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "./category.css";
const Category= ()=>{
  const params = useParams()
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.meals);
      })
      .catch((err) => console.log("err"));
      
  }, []);

const handle=categories.map(cat=>(
  <Link to={`/meal/${cat.idMeal}`} key={cat.idMeal}  >
    
        <div className="card">
        <div >
      <img src={cat.strMealThumb} className="card-img"/> 
    </div>
    <div>
      <h2>{cat.strMeal}</h2>
     
    </div></div>

  </Link>)
)

return(    
    
  <div className="card-list">
    {handle}
        </div>
       
    );
}
export default Category