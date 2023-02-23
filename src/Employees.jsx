import { useState } from 'react';
import React from 'react';
import maleProfile from "./images/maleProfile.jpg";
import femaleProfile from "./images/femaleProfile.jpg";


const Employees = () => {
  const [employees, setEmployees] = useState([{
    id: 1,
    fullName: "Bob Jones",
    designation: "Javascript Developer",
    gender:"Male",
    teamName:"TeamA",
  },
  {
    id: 2,
    fullName: "Anosh Khan",
    designation: "Mern Developer",
    gender:"Female",
    teamName:"TeamB",
  },
  {
    id: 3,
    fullName: "Jonas",
    designation: "Designer",
    gender:"Male",
    teamName:"TeamC",
    
  },
  {
    id: 4,
    fullName: "Smith",
    designation: "Software Engnieer",
    gender:"Male",
    teamName:"TeamD",
  },
  {
    id: 5,
    fullName: "Shelly",
    designation: "UX Designer",
    gender:"Female",
    teamName:"TeamD",
  },
  {
    id: 6,
    fullName: "Anosh Khan",
    designation: "Mern Developer",
    gender:"Female",
    teamName:"TeamB",
  },
  {
    id: 7,
    fullName: "Amar",
    designation: "Laravel Developer",
    gender:"Male",
    teamName:"TeamA",
  },
  {
    id: 8,
    fullName: "Ahsan",
    designation: "Marketing Manager",
    gender:"Male",
    teamName:"TeamA",
  },
  {
    id: 9,
    fullName: "Sara",
    designation: "Mern Developer",
    gender:"Female",
    teamName:"TeamC",
  },
  {
    id: 10,
    fullName: "Willey",
    designation: "React Developer",
    gender:"Male",
    teamName:"TeamB",
  }
]);

  return (
    <main className='container'>
    <div className='row justify-content-center mt-3 mb-3'>
      <div className='col-8'>
          <select>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamB">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
      </div>
    </div>
    <div className='row justify-content-center mt-3 mb-3'>
      <div className='col-11'>
      <div className='card-collection'>
      {
      employees.map((employee) =>(
        <div id={employee.id} className="card m-2" style={{cursor: "pointer"}}>
          {(employee.gender === 'Male') ? <img src={maleProfile} className="card-img-top"/>
                                        : <img src={femaleProfile} className="card-img-top"/>
          }
          <div className='card-body'>
          <h6 className='card-body-title'><b>Full Name: </b>{employee.fullName}</h6>
          <p className='card-text'><b>Designation: </b>{employee.designation}</p>
          </div>
        </div>
      ))
    }
    </div>
      </div>
    </div>
    </main>
  )
}

export default Employees