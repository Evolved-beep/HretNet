import React from "react";
import { Link } from "react-router-dom";
import Table from "../component/Table";
import '../assets/css/employe.css'

const EmployeeList = () => {

    return(
        <div id="employee-div" className="employee_container">
            <h1>Current Employees</h1>
            <Link to='/'>Home</Link>
            <Table />
        </div>
    )
}

export default EmployeeList