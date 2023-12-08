import React from 'react'
import './Card.css'

function Card(employee) {
 return (
    <>
    <div className='card'>
        <div className='card-details'>
            <div className='image'>
                <img src={employee.image}/>
            </div>
            <div className='fname'><b>First Name: </b>{employee.first_name}</div>
            <div className='lname'><b>Last Name: </b>{employee.last_name}</div>
            <div className='job-title'><b>Job Title: </b>{employee.job_title}</div>
            <div className='phone'><b>Phone No: </b>{employee.phone}</div>
            <div className='email'><b>Email Id: </b>{employee.email}</div>
            <div className='city'><b>City: </b>{employee.city}</div>
        </div>
    </div>
    </>
  )
}

export default Card