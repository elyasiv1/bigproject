
import React from 'react';
import { Link } from 'react-router-dom'
import PaymentForm from './PaymentForm'
import Lease from './Lease'

export default function Payment(props) {
    // const [order, setOrder ] = React.useState ({

    // })



    // function  inputChange (e) {
    //     const { type, name, checked, value } = e.target
    //     const v = type === 'checkbox' ? checked : value

    //     setOrder({ ...order, [name]: v })

    // }
    // function inputChangeCheck(e) {
    //     const { name, value } = e.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    return <div className="carRent">

        <h2>בצע רכישה</h2>
        <div className='order'>
            <PaymentForm />
             <div className='carAvelobol' key={props.car.number}>
                {<div className='imgDiv'>
                    <img className='carImg' src={props.car.image} alt='pix' /></div>}
                <div>
                    <div className="carName"> <h4>{props.car.maker + " " + props.car.name}</h4>

                    </div>
                    <h5>ק"מ{props.car.kms}</h5>
                    <h6>{props.car.year}</h6>
                </div>
                <button className="linkToRent" onClick={() => { props.onSelectACar(props.car) }} > הזמן{props.car.price}ש"ח</button>
                {/* <Link onClick={() => { props.onSelectACar(car) }} to='/Payment' className='linkToRent'> ש"ח{car.price}בצע רכישה</Link> */}
            </div>
            {/* <PaymentForm order={order} addChange={inputChange}/> */}
            {/* <button type='submit' onClick={submit}></button> */}
            <Link to='/Done' className='linkToRent'>הזמן</Link>
        </div>


    </div>


} 