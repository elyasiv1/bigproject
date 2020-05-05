import React from 'react';
import { Link } from 'react-router-dom'


export default function Done(props){

return <div className='Done'>
    <h1>בוצע</h1>
    <Link to= '/'  className='linkToRent'>חזור לדף הבית</Link>
</div>
}