import React, { useState } from "react";
import DataTable from 'react-data-table-component';
import { useSelector } from "react-redux";


const Table = () => {
    const test = useSelector((state => state.employe))
    console.log(test.employe)

    const columns = [{
        name:'First Name',
        selector: row => row.firstname,
        sortable: true
    },
    {
        name: 'Last name',
        selector: row => row.lastname,
        sortable: true
    },
    {
        name:'Start Date',
        selector: row => row.date,
        sortable:true
    },
    {
        name:'Departement', 
        selector: row => row.departement,
        sortable: true
    },
    {
        name:'Date of Birth',
        selector: row => row.birth,
        sortable: true
    },
    {
        name:'Street',
        selector: row => row.street,
        sortable: true

    },
    {
        name:'City',
        selector: row => row.city,
        sortable: true
    },
    {
        name:'State',
        selector: row => row.state,
        sortable: true
    },
    {
        name:'Zip Code',
        selector: row => row.code,
        sortable: true
    }
]
    
    const [search, setSearch ] = useState(test.employe)
    const handleFilter = (e) => {
        console.log(test.employe)
        console.log(search)
        const dataFiltered = test.employe.filter(data => {
            return (
                data.firstname.toLowerCase().includes(e.target.value.toLowerCase()) || 
                data.lastname.toLowerCase().includes(e.target.value.toLowerCase()) || 
                data.departement.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.street.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.city.toLowerCase().includes(e.target.value.toLowerCase()) || 
                data.state.toLowerCase().includes(e.target.value.toLowerCase())
                ) 
            })
            setSearch(dataFiltered)

    }
    return(
        <div className="table_container">
                <input type="text" onChange={handleFilter} placeholder="search" />
            <DataTable 
                columns={columns}
                data={search}
                pagination
                subHeader
                
            />
        </div>
    )

   
}

export default Table