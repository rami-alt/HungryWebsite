import './App.css';
import NavBar from './component/navBar';
import { Route,Routes } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Home from './page/home';
import Card from './component/card';
import Category from './component/category';
import Meal from './component/meal_det';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
         <div><NavBar /> <Home/></div>}/>
         <Route path='/category/:strCategory' element={
         <div><NavBar /> <Category/></div>}/>
         <Route path='/meal/:strCategory' element={
         <div><NavBar /> <Meal/></div>}/>
         </Routes></BrowserRouter>
  );
}

export default App;
