import React from 'react';
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { PlayCircle } from 'react-bootstrap-icons';

const Main = () => {
    const [food, setFoods] = useState([])

    function refreshPage() {
        window.location.reload();
      }
    
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
                <>
                <div className='main' key={e}>
                <img className='image' src={e.strMealThumb} alt=''></img>
                <div className='info'>
                <button className='meal-button' onClick={refreshPage}>Next Meal</button>
                <h1 className='h1-title'>{e.strMeal}</h1>
                <p className='tags'>{e.strTags}</p>
                <hr />
                <div className='top-info'>
                <div><span className='area'>Origin:</span>  <br /><span className='cat-area-name'>{e.strArea}</span></div>
                <div><span className='category'>Category:</span> <br /><span className='cat-area-name'>{e.strCategory}</span></div>
                </div>
                <div className='ing-div'>
                <p className='ing-title'>Main ingredients:</p>
                <div className='ingredients'>{e.strIngredient1}</div>
                <div className='ingredients'>{e.strIngredient2}</div>
                <div className='ingredients'>{e.strIngredient3}</div>
                <div className='bottom-btns'>
                <button className='recipe recipe-btn'><a className='recipe-link' href={e.strSource} target='_blank' rel='noreferrer'>Full Recipe</a></button>
                <button className='video video-btn'>
                    <a className='video-link' href={e.strYoutube} target='_blank' rel='noreferrer'><PlayCircle /> How-to Video</a>
                </button>
                </div>
                </div>
                </div>
                
                </div>
                </>
            ));
          };
        
          return food ? loaded() : <Spinner className='spinner' animation="grow" />;
        }
        
        export default Main;
