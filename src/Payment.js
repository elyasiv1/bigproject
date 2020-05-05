
import React from 'react';
import { Link } from 'react-router-dom'
import PaymentForm from './PaymentForm'


export default function Payment(props) {


    return <div className="carRent">

        <h2>בצע רכישה</h2>
        <div className='theChosenCar' key={props.car.number}>
            {<div className='imgDiv'>
                <img className='carImg' src={props.car.image} alt='pix' /></div>}
            <div>
                <div className="carName"> <h4>{props.car.maker + " " + props.car.name}</h4>

                </div>
                <h5>ק"מ{props.car.kms}</h5>
                <h6>{props.car.year}</h6>
            </div>

        </div>

        <div className='order'>
            <PaymentForm inputChange={props.inputChange} />
            <Link to='/Done' className='linkToRent'>הזמן</Link>

            {/* <button className="linkToRent" onClick={() => { props.onSelectACar(props.car) }} > בצע רכישה</button> */}
            {/* <Link to='/Done' className='linkToRent' onClick={ props.onSelectACar(car) }>{Math.round(car.price*props.numberOfDays())}ש"ח הזמן</Link> */}
        </div>


    </div>


} 