import React, { useState, useRef, useEffect } from "react";
import Modal from "../component/Modal";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { states } from "../assets/data/states";
import { departements } from "../assets/data/departements";
import Select from "./Select";
import { useDispatch } from "react-redux";
import { addEmploye } from "../Employee/createEmploye";
import "../assets/css/form.css";

const Form = () => {
  const [openModal, setOpenModal] = useState(false);
  const [firstname, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [birth, setBirth] = useState("");
  const [date, setStart] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [departement, setDepartement] = useState("");
  const [state, setState] = useState("");
  const [errors, setError] = useState(false)
  const [dateToday] = useState(new Date().getTime())

  const data = {
    firstname,
    lastname,
    birth: JSON.stringify(birth),
    date: JSON.stringify(date),
    street,
    city,
    code,
    departement,
    state,
  };
  const dispatch = useDispatch();

  const handleClick = (event) => {
      event.preventDefault();
      if(validate() === true){
            event.stopPropagation()
            dispatch(addEmploye(data));
            setOpenModal(true);
        }else {
            alert("stop")
        }
  };

  const stateValue = (e) => {
    setState(e.target.value);
  };

  const departementValue = (e) => {
    setDepartement(e.target.value);
  };

  const userRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ- -]{1,}$/;
  const numbRegex = /^[0-9]{6}/
  const validate = () => {  
    if(userRegex.test(firstname.trim()) && 
    userRegex.test(lastname.trim()) 
    && 
    dateToday > new Date(birth).getTime() &&
    date !== "" &&
    street !== "" && 
    userRegex.test(city.trim()) &&
    state !== "" && 
    numbRegex.test(code.trim()) &&
    departement !== ""
    ){
        return true
    } 
    
    
    else {
        return setError(true)
    }

  }

  return (
    <>
      <Link to="/Employee">View Current Employees</Link>
      <div className="container">
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <input
            className="input_employee"
            type="text"
            id="first-name"
            onChange={(e) => setName(e.target.value)}
            placeholder="First name"
          />
          {errors && !userRegex.test(firstname.trim()) ? (
            <p className="error_input">Votre nom doit comporter au minimum 1 caractère</p>
          ): (
            ""
          )}
          <input
            className="input_employee"
            type="text"
            id="last-name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors && !userRegex.test(lastname.trim())? (
            <p className="error_input">Votre prénom doit comporter au minimum 1 caractère </p>
          ): (
            ""
          )}
          <DatePicker
            className="input_employee"
            placeholderText="Date of birth"
            selected={birth}
            onChange={(date) => {
              setBirth(date);
            }}
          />
         {errors && birth === "" || dateToday < new Date(birth).getTime() ?(
            <p className="error_input">Votre date de naissance n'est pas conforme</p>
         ): ""} 
          <DatePicker
            className="input_employee"
            placeholderText="Start date"
            selected={date}
            onChange={(date) => setStart(date)}
          />
          {errors && date === ""?(
            <p className="error_input">Il semble y avoir une erreur avec votre date de commençement</p>
          ): ""}
          <input
            className="input_employee"
            placeholder="Street"
            id="street"
            type="text"
            onChange={(e) => setStreet(e.target.value)}
            />
            {errors && street === "" ?(
                <p className="error_input">Veuillez renseigner ce champs</p>
            ):""}
          <input
            className="input_employee"
            placeholder="City"
            id="city"
            type="text"
            onChange={(e) => setCity(e.target.value)}
          />
          {errors && !userRegex.test(city.trim()) ? (
            <p className="error_input">Votre ville doit être mieux renseigné </p>
          ): ""}
          <Select
            name="state"
            id="state"
            data={states}
            myFct={stateValue}
          />
          {errors && state === "" ? (
            <p className="error_input">Veuillez faire un choix parmis la selection</p>
          ): ""}
          <input
            className="input_employee"
            placeholder="Zip code"
            id="zip-code"
            type="number"
            onChange={(e) => setCode(e.target.value)}
          />
          {errors && !numbRegex.test(code.trim()) ? (
            <p className="error_input">Votre code postal doit comporter au minimum 6 caractères</p>
          ): ""}
          <Select
            name="departement"
            id="departement"
            data={departements}
            myFct={departementValue}
          />
          {errors && departement === "" ? (
            <p className="error_input">Veuillez faire un choix parmis la selection</p>
          ): ""}
        </form>
        <button onClick={handleClick}>Save</button>
        {openModal && <Modal closeModal={setOpenModal} />}
      </div>
    </>
  );
};

export default Form;
