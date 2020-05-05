import React from 'react'
import CarAvelobol from './CarAvelobol'
import CarLeas from './Form'
import Cars from './imports/cars'
import Payment from './Payment'
import ReturnCar from './ReturnCar'

export default function Lease() {

    const [filters, setfilters] = React.useState({
        from: false,
        to: false,
        size0: false,
        size1: false,
        size2: false,
        manual: false,
        auto: false,
        days: 0

    })

    function addChange(e) {
        const { type, name, checked, value } = e.target
        const v = type === 'checkbox' ? checked : value

        setfilters({ ...filters, [name]: v })

    }
    const [paymentData, setPaymentData] = React.useState({})
    const [ReturnCarData, setReturnCarData] = React.useState({
        userName: false,
        userLastName: false,
        carNumber:null,
        id: null,
        returnACar: false,
        date: new Date()
    })

    const [selectedCar, setSelectedCar] = React.useState({
        purchase: false,
        car: null

    })
    function inputChange(e) {
        const { type, name, checked, value } = e.target
        const v = type === 'checkbox' ? checked : value


        const newPaymentData = { ...paymentData, [name]: v }

        setPaymentData(newPaymentData)


        const customersRent = JSON.parse(localStorage.rented || null) || []

        const index = customersRent.findIndex(c => c.carNumber === selectedCar.car.number)
        if (index === -1)
            customersRent.push({ carNumber: selectedCar.car.number, ...newPaymentData })
        else
            customersRent[index] = { carNumber: selectedCar.car.number, ...newPaymentData }
        localStorage.rented = JSON.stringify(customersRent)


    }



    function inputReturn(e) {
        const { type, name, checked, value } = e.target
        const v = type === 'checkbox' ? checked : value



        setReturnCarData({ ...ReturnCarData, [name]: v });
        console.log(ReturnCarData)

    }
    function deleteFromLocal() {
        const customersReturn = JSON.parse(localStorage.rented || null) || []
        const index = customersReturn.findIndex(c => c.carNumber === ReturnCarData.carNumber)
        // if (index === -1){
        //     return alert("try agen")
        // }

        // else if (index !== -1)
        customersReturn.pop({ carNumber: ReturnCarData.carNumber })
        // else
        customersReturn[index] = ({ carNumber: ReturnCarData.carNumber })
        localStorage.rented = JSON.stringify(customersReturn)

    }






    function onSelectACar(car) {
        // console.log(car);
        console.log(filters);

        setSelectedCar({ ...selectedCar, purchase: true, car: car })

    }
    function numberOfDays() {
        let date1 = new Date(filters.from)
        let date2 = new Date(filters.to)
        let diffdays = Math.ceil((date2 - date1) / (1000 * 60 * 60 * 24))

        if (diffdays === NaN) { diffdays = 0 }
        else if (diffdays <= -1) { diffdays = 0 }

        return diffdays + 1



    }

    function onReturnCar() {
        setReturnCarData({ ...ReturnCarData, returnACar: true })

    }


    if (ReturnCarData.returnACar === true)
        return <ReturnCar inputReturn={inputReturn} deleteFromLocal={deleteFromLocal} />


    else if (selectedCar.purchase === true)
        return <Payment car={selectedCar.car} inputChange={inputChange} />
    // לשים את דף החזרת רכב בעמוד הזה ולעשות פונקציה שדומה 
    // onSelectACar
    // ולשורה 78-79 בהתאמה כמובן
    return <div className='leasePage'>
        <div className="formDiv">
            <CarLeas filters={filters} addChange={addChange} numberOfDays={numberOfDays} />
        </div>
        <CarAvelobol Cars={Cars} selectedCar={selectedCar} numberOfDays={numberOfDays} onSelectACar={onSelectACar} filters={filters} addChange={addChange} numberOfDays={numberOfDays} />
        <button className="link" onClick={() => { onReturnCar() }} >החזרת רכב</button>
    </div>

}
