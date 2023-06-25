import React, { useState } from "react";
import Modal from '../component/Modal'
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker";
import { states } from "../assets/data/states";
import { departements } from "../assets/data/departements"; 
import Select from "./Select";
import { useDispatch } from "react-redux";
import { addEmploye } from "../Employee/createEmploye";
import '../assets/css/form.css'


const Form = () => {

    const [openModal, setOpenModal] = useState(false)
    const [firstname, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [birth, setBirth] = useState("")
    const [date, setStart] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [code, setCode] = useState("")
    const [departement, setDepartement] = useState("")
    const [etat, setState] = useState("")
    const data = {firstname,lastname,birth:JSON.stringify(birth),date:JSON.stringify(date),street,city,code,departement,etat}
    const dispatch = useDispatch()

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(addEmploye(data))
        setOpenModal(true)
        
    }
    const stateValue = (e) => {
        console.log(e.target.value)
        setState(e.target.value)
    }

    const departementValue = (e) => {
        setDepartement(e.target.value)
    }

    return (
        <>
        <Link to="/Employee">View Current Employees</Link> 
        <div class="container">
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <input className="input_employee" type="text" id="first-name" onChange={(e) => setName(e.target.value)}  placeholder="First name"/>
                <input className="input_employee" type="text" id="last-name" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
                <DatePicker className="input_employee" placeholderText="Date of birth" selected={birth} onChange={(date) => {setBirth(date)}}/>
                <DatePicker className="input_employee" placeholderText="Start date" selected={date} onChange={(date) => setStart(date)} />
                <input className="input_employee" placeholder="Street" id="street" type="text" onChange={(e) => setStreet(e.target.value)}/>
                <input className="input_employee" placeholder="City" id="city" type="text" onChange={(e) => setCity(e.target.value)} />
                    <Select name="state" id="state" data={states} myFct={stateValue}>

                    </Select>
                    <input className="input_employee" placeholder="Zip code" id="zip-code" type="number" onChange={(e) => setCode(e.target.value)} />
                <Select name="departement" id="departement" data={departements} myFct={departementValue}>

                </Select>
            </form>
            <button onClick={handleClick}>Save</button> 
            {openModal && <Modal closeModal={setOpenModal} />}
        </div>
        </>
    )
}

export default Form