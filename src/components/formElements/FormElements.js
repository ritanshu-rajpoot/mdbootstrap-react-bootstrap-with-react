import React from "react"
import "./FormElements.css"
const FormElements = ()=>{
    // margin: 12px 0
    return(
        <div className="p-4 border">
            <form className="bg-dark text-white p-4 w-custom-2 m-auto">
                <div className="form-group">
                    <label htmlFor="" className="d-inline-block custom">
                        email
                    </label>
                    <input type="text" className="form-control d-inline-block"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">
                        phone
                    </label>
                    <input type="number" id="phone" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="" >
                        address
                    </label>
                    <input type="text"  className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">
                        select your role
                    </label>
                    <select  className="form-control" name="" id="">
                        <option value="">java developer</option>
                        <option value="">react developer</option>
                        <option value="">angular developer</option>
                        <option value="">python developer</option>
                    </select>
                </div>
                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}
export default FormElements
