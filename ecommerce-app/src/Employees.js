import axios from 'axios';
import { useEffect, useState } from 'react';

function Employee(){

const [employees,setEmployees]=useState([])

useEffect(()=>{
    axios.get('https://hub.dummyapis.com/employee').then(response =>{
        console.log(response.data)
        setEmployees(response.data)
    })
},[]);
    return(
        <div className='container '>
            {employees.map((emp)=>(
                <div className='row border my-4 py-4 text-center'>
                    <div className='col-sm-5 '>
                        <h5>address</h5>
                        <p></p>
                        <h5>age</h5>
                        <p></p>
                        <h5>contactNumber</h5>
                        <p></p>
                        <h5>dob</h5>
                        <p></p>
                        <h5>email</h5>
                        <p></p>
                        <h5>firstName</h5>
                        <p></p>
                        <h5>id</h5><p></p>
                        <h5>imageUrl</h5><p></p>
                        <h5>lastName</h5><p></p>
                        <h5>salary</h5>
                        </div>
                        <div className='col-sm-7'>
                            <p>{emp.address}</p>
                            <p>{emp.age}</p>
                            <p>{emp.contactNumber}</p>
                            <p>{emp.dob}</p>
                            <p>{emp.email}</p>
                            <p>{emp.firstName}</p>
                            <p>{emp.id}</p>
                            <p>{emp.imageUrl}</p>
                            <p>{emp.lastName}</p>
                            <p>{emp.salary}</p>
                            </div>
                    </div>
            ))}

        </div>
    )
}
export default Employee;