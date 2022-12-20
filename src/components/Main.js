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
                <h1>{e.strMeal}</h1>
                <img className='image' src={e.strMealThumb} alt=''></img>
                <div className='info'>
                <p className='area'>{e.strArea}</p>
                <p className='category'>{e.strCategory}</p>
                <p className='ingredients'>{e.strIngredient1}</p>
                <p className='ingredients'>{e.strIngredient2}</p>
                <p className='ingredients'>{e.strIngredient3}</p>
                <p>Click <a className='recipe' href={e.strSource} target='_blank'>Full Recipe</a> for more</p>
                </div>
                <p>{e.strTags}</p>
                <p>
                    Watch how to video<a className='video' href={e.strYoutube} target='_blank'> here</a>
                </p>
                </div>
            ));
          };
        
          return food ? loaded() : <Spinner className='spinner' animation="grow" />;
        }
        
        export default Main;
