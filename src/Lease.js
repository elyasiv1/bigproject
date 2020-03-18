import React from 'react'
import CarAvelobol from './CarAvelobol'
import CarLeas from './Form'
import Cars from './imports/cars'
import Payment from './Payment'

export default function Lease() {

    const [filters, setfilters] = React.useState({
        from: new Date(),
        to: new Date(),
        startDate: false,
        endDate: false,
        size0: false,
        size1: false,
        size2: false,
        manual: false,
        auto: false

    })
   
    function addChange(e) {
        const { type, name, checked, value } = e.target
        const v = type === 'checkbox' ? checked : value

        setfilters({ ...filters, [name]: v })

    }
     const [selectedCar, setSelectedCar] = React.useState({
        purchase: false,
        car: null,
        // startDate:null,
        // endDate:null
    })
    function onSelectACar(car) {
        console.log(car);
    
        setSelectedCar({...selectedCar,purchase:true,car:car})
      
    }
    function submit() {

    //   setSelectedCar({...selectedCar,startDate:startDate,endDate:endDate})
    }
 if(selectedCar.purchase===true) 
       return <Payment car={selectedCar.car} submit={submit}/>

    return <div className='leasePage'>
        <div className="formDiv">
            <CarLeas filters={filters} addChange={addChange} />
        </div>

        <CarAvelobol Cars={Cars} selectedCar={selectedCar} onSelectACar={onSelectACar} filters={filters} addChange={addChange} />
    </div>

}
