import React from "react";
import './FormElements.css'
const FormTypeTwo = () =>{
    return (
        <div className="p-4 .form-type-2 my-5 ">
            <form className="bg-light p-4 w-50 m-auto">
                <div className="form-group input-custom d-flex justify-content-between">
                    <label htmlFor="" className="mx-3 label">
                        email
                    </label>
                    <input type="text" className="form-control w-custom"/>
                </div>
                <div className="form-group input-custom d-flex justify-content-between">
                    <label htmlFor="phone" className="mx-3 label">
                        phone
                    </label>
                    <input type="number" id="phone" className="form-control w-custom"/>
                </div>
                <div className="form-group input-custom d-flex justify-content-between">
                    <label htmlFor="" className="mx-3 label">
                        address
                    </label>
                    <input type="text"  className="form-control w-custom"/>
                </div>
                <div className="form-group input-custom d-flex justify-content-between">
                    <label htmlFor="" className="mx-3 label">
                        select your role
                    </label>
                    <select  className="form-control w-custom " name="" id="">
                        <option value="">java developer</option>
                        <option value="">react developer</option>
                        <option value="">angular developer</option>
                        <option value="">python developer</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default FormTypeTwo
