import React from "react";

const Select = ({data, myFct}) => { 
    return(
        <select className="input_employee" onChange={myFct}>
            {data.map((dataMapped, index) => {
                return(
                    <option value={dataMapped.name} key={index}>{dataMapped.name}</option>
                )
            })}
            
        </select>
    )
}

export default Select