import React from 'react';
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { PlayCircle } from 'react-bootstrap-icons';

const Main = () => {
    const [food, setFoods] = useState([])

    function refreshPage() {
        window.location.reload(false);
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
                <button className='button' onClick={refreshPage}>Click to reload!</button>
                <h1 className='h1-title'>{e.strMeal}</h1>
                <p>{e.strTags}</p>
                <hr />
                <div className='top-info'>
                <div><span className='area'>Origin:</span>  <br />{e.strArea}</div>
                <div><span className='category'>Category:</span> <br />{e.strCategory}</div>
                </div>
                <div className='ing-div'>
                <p className='ing-title'>Main ingredients:</p>
                <div className='ingredients'>{e.strIngredient1}</div>
                <div className='ingredients'>{e.strIngredient2}</div>
                <div className='ingredients'>{e.strIngredient3}</div>
                <div className='bottom-btns'>
                <button className='recipe'><a href={e.strSource} target='_blank'>Full Recipe</a></button>
                <button>
                    <a className='video' href={e.strYoutube} target='_blank'><PlayCircle />How-to Video</a>
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
