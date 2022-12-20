import React from 'react';
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';

const Main = () => {
    const [food, setFoods] = useState([])

    
    
    useEffect(() => {
        const url = `https://themealdb.com/api/json/v1/1/random.php/preview`
    
    const getFood = async () => {
      const response =await fetch(url)
      const data = await response.json()
      console.log(data)
      setFoods([data])
    }
        getFood()}, []);

        const loaded = () => {
            return food[0]?.meals?.map((e) => (
                <div className='main' key={e}>
                <h1 className='h1-title'>{e.strMeal}</h1>
                <p>{e.strTags}</p>
                <img className='image' src={e.strMealThumb} alt=''></img>
                <div className='info'>
                <div className='area'>Origin: {e.strArea}</div>
                <div className='category'>Category: {e.strCategory}</div>
                <div className='ing-div'>
                <p className='ing-title'>Main ingredients:</p>
                <div className='ingredients'>{e.strIngredient1}</div>
                <div className='ingredients'>{e.strIngredient2}</div>
                <div className='ingredients'>{e.strIngredient3}</div>
                <p className='recipe'>Click <a href={e.strSource} target='_blank'>Full Recipe</a> for more</p>
                <p>
                    Watch how to video<a className='video' href={e.strYoutube} target='_blank'> here</a>
                </p>
                </div>
                </div>
                </div>
            ));
          };
        
          return food ? loaded() : <Spinner className='spinner' animation="grow" />;
        }
        
        export default Main;
