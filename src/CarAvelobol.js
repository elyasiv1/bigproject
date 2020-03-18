import React from 'react';
import { Link } from 'react-router-dom'

export default function CarAvelobol(props) {

    return <div>
        {props.Cars.map(car => {


            // console.log(props.filters);
            // console.log(car);

            let carPresentation = <div className='carAvelobol' key={car.number}>
                {<div className='imgDiv'>
                    <img className='carImg' src={car.image} alt='pix' /></div>}
                <div>
                    <div className="carName"> <h4>{car.maker + " " + car.name}</h4>

                    </div>
                    <h5>ק"מ{car.kms}</h5>
                    <h6>{car.year}</h6>
                </div>
                <button className="linkToRent" onClick={() => { props.onSelectACar(car) }} > בצע רכישה{car.price}ש"ח</button>
                {/* <Link onClick={() => { props.onSelectACar(car) }} to='/Payment' className='linkToRent'> ש"ח{car.price}בצע רכישה</Link> */}
            </div>
            if (!props.filters.size0 && !props.filters.size1 && !props.filters.size2 &&
                !props.filters.manual && !props.filters.auto) {
                return carPresentation
            }
            if ((props.filters.size0 || props.filters.size1 || props.filters.size2) && !props.filters.size0 && car.size === 1) {
                return null
            }
            if ((props.filters.size0 || props.filters.size1 || props.filters.size2) && !props.filters.size1 && car.size === 2) {
                return null
            }
            if ((props.filters.size0 || props.filters.size1 || props.filters.size2) && !props.filters.size2 && car.size === 3) {
                return null
            }
            if ((props.filters.manual || props.filters.auto) && !props.filters.manual && car.gear === "manual") {
                return null
            }
            if ((props.filters.manual || props.filters.auto) && !props.filters.auto && car.gear === "auto") {
                return null
            }
            return carPresentation
        })}
    </div>
}