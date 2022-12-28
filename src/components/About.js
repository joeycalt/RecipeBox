import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <>
    <div className='about-page'>
        <div className='about-info'>
        <h1 className='about-title'>It's time to shake things up</h1>
        <span className='about-p-2'>Meet RecipeBox</span>
        <p className='about-p'>
        If you're tired of the same old meals over and over again, RecipeBox generates exquisite meals from around the globe and provides you will all the resources you need to build the recipes at home. Ditch the wooden recipe box on your counter and find your new favorite meal with the click of a button.</p>
        <button className='shuffler-link'>
            <Link className='shuffler-link-a' to='/shuffler'>Let's get cooking</Link>
        </button>
    </div>
        <div className='gif'>
            <img className='gif-image' src='https://i.im.ge/2022/12/21/qdELZp.ezgif-com-gif-maker.gif' alt=''></img>
          
        </div>
        </div>
    </>
  )
}

export default About