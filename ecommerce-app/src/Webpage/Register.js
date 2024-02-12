import React, { useState } from "react";
import { useForm } from "react-hook-form"

function Register() {
    const{register,handleSubmit,formState: {errors}}=useForm();

    const registeruser=(data)=>{
console.log(data)
    };
    return (
        <div className="container">
            <div className="row">

                <form className="my-3 text-center" onSubmit={handleSubmit(registeruser)}>
                    <div className="col-sm my-3 ">
                        <label htmlFor="firstName" className="form-label">First Name<span className="text-danger">*</span></label><br />
                        <input type="text"  id="firstName" {...register('firstName',{required:true})} placeholder="Please Enter First Name" />
                        <p className="text-danger">{errors['firstName'] && 'please Enter firstName'}</p>
                    </div>

                    <div className="col-sm my-3">
                        <label htmlFor="lastName" className="form-label">Last Name<span className="text-danger">*</span></label> <br />
                        <input type="text"  id="lastName" {...register('lastName',{required:true})} placeholder="Please Enter Last Name" />
                        <p className="text-danger">{errors['lastName'] && 'please Enter lastName'}</p>
                    </div>

                    <div className="col-sm my-3">
                        <label htmlFor="email" className="form-label">Email<span className="text-danger">*</span></label><br />
                        <input type="email"  id="email" {...register('email',{required:true})} placeholder="Please Enter Email" />
                        <p className="text-danger">{errors['email'] && 'please Enter Email'}</p>
                    </div>
                    <div className="col-sm my-3">
                        <label htmlFor="mobile" className="form-label">Phone No<span className="text-danger">*</span></label><br />
                        <input type="text"  id="mobile" {...register('mobile',{required:true})} placeholder="Please Enter ph number" />
                        <p className="text-danger">{errors['mobile'] && 'please Enter Phone number'}</p>
                    </div>

                    <div className="col-sm my-3">
                        <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label><br />
                        <input type="text"  id="password" {...register('password',{required:true})} placeholder="Please Enter Password" />
                        <p className="text-danger">{errors['password'] && 'please Enter password'}</p>
                    </div>
                    <div className="col-sm my-3">
                        <button className="btn btn-success" type="submit">Submit</button>
                    </div>
                </form>

            </div>

        </div>


    )
}

export default Register;