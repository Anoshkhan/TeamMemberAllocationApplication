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
  }]);

  return (
    <main className='container'>
    <div>
      <div>
      {
      employees.map((employee) =>(
        <>
        <p>{employee.fullName}</p>
        <img src={femaleProfile}/>
        </>
      ))
    }
      </div>
    </div>
    </main>
  )
}

export default Employees