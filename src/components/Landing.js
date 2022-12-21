import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
    <div className='space'>

    </div>
    <div className='landing'>
        <div className='landing-info'>
        <div className='first-title'>
            Tired of the same old meals?
        </div>
        <h1 className='second-title'>
            Welcome to RecipeBox
        </h1>
        <button className='shuffler-link-2'>
            <Link className='shuffler-link-a' to='/shuffler'>Let's get cooking</Link>
        </button>
        </div>
    </div>
    </>
  )
}

export default Landing