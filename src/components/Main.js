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
                <div key={e}>
                <h1>{e.strMeal}</h1>
                <img className='image' src={e.strMealThumb} alt=''></img>
                <p>{e.strArea}</p>
                <p>{e.strCategory}</p>
                <p>{e.strIngredient1}</p>
                <p>{e.strIngredient2}</p>
                <p>{e.strIngredient3}</p>
                <p>Click <a href={e.strSource} target='_blank'>Full Recipe</a> for more</p>
                <p>{e.strTags}</p>
                <p>
                    <a href={e.strYoutube} target='_blank'>Youtube</a>
                </p>
                </div>
            ));
          };
        
          return food ? loaded() : <Spinner className='spinner' animation="grow" />;
        }
        
        export default Main;
