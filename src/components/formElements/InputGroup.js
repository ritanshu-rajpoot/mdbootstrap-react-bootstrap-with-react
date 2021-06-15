import React from "react";
import "./FormElements.css"
const InputGroup = ()=>{
    return(
        <div className="m-5">
            <h3 className="display-4 mt-5 pt-5 text-primary text-left">Hello welcome to Xpertiks</h3>
            <div className="alert alert-custom" role="alert">
                A simple primary alert—check it out!
            </div>
            <p className="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad distinctio enim error facere fugit impedit maxime modi natus odio pariatur perspiciatis porro quibusdam saepe sapiente sed sequi similique, tempora tenetur veniam veritatis vero voluptates? Cum fugit laboriosam molestias optio.</p>
            <p className="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad distinctio enim error facere fugit impedit maxime modi natus odio pariatur perspiciatis porro quibusdam saepe sapiente sed sequi similique, tempora tenetur veniam veritatis vero voluptates? Cum fugit laboriosam molestias optio.</p>
            <form action="" className="m-5 p-3 w-50 bg-dark rounded shadow">
                <div className="input-group pb-3 m-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text ">@</span>
                    </div>
                    <input className="form-control focus py-4" type="text" placeholder="username"/>
                </div>
                <div className="input-group pb-3 m-1">
                    <input type="email" className="form-control py-4" placeholder="email"/>
                    <div className="input-group-append">
                        <span className="input-group-text">@gmail.com</span>
                    </div>
                </div>
                <div className="form-group pb-3 m-1">
                    <input className="form-control py-4" type="number" placeholder="password"/>
                </div>
                <div className="form-group pb-3 m-1">
                    <input className="form-control py-4" type="date" placeholder="date of birth"/>
                </div>
                <div className="form-group pb-3 m-2 custom-dim d-flex align-items-start text-white font-small">
                    <div className="mr-3">
                        <h5 className="lead">select gender</h5>
                    </div>
                    <div className="d-flex align-items-center">
                        <label htmlFor="male">male</label>
                        <input id="male" name="gender" value="male" className="m-2" aria-label="Checkbox for following text input" type="radio"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <label htmlFor="female">female</label>
                        <input name="gender" id="female" value="female" className="m-2" aria-label="Checkbox for following text input" type="radio"/>
                    </div>
                </div>
                <div className="form-group pb-3 m-2 custom-dim d-flex align-items-start text-white font-small">
                    <div className="mr-3">
                        <h5 className="lead">select role</h5>
                    </div>
                    <div className="d-flex align-items-center">
                        <label htmlFor="male">react</label>
                        <input id="male" name="gender" value="male" className="m-2" aria-label="Checkbox for following text input" type="checkbox"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <label htmlFor="female">java</label>
                        <input name="gender" id="female" value="female" className="m-2" aria-label="Checkbox for following text input" type="checkbox"/>
                    </div>
                </div>
                <input type="submit" className="btn btn-outline-primary"/>
            </form>
            <p className="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad distinctio enim error facere fugit impedit maxime modi natus odio pariatur perspiciatis porro quibusdam saepe sapiente sed sequi similique, tempora tenetur veniam veritatis vero voluptates? Cum fugit laboriosam molestias optio.</p>
            <p className="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad distinctio enim error facere fugit impedit maxime modi natus odio pariatur perspiciatis porro quibusdam saepe sapiente sed sequi similique, tempora tenetur veniam veritatis vero voluptates? Cum fugit laboriosam molestias optio.</p>
            <p className="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad distinctio enim error facere fugit impedit maxime modi natus odio pariatur perspiciatis porro quibusdam saepe sapiente sed sequi similique, tempora tenetur veniam veritatis vero voluptates? Cum fugit laboriosam molestias optio.</p>
            <p className="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad distinctio enim error facere fugit impedit maxime modi natus odio pariatur perspiciatis porro quibusdam saepe sapiente sed sequi similique, tempora tenetur veniam veritatis vero voluptates? Cum fugit laboriosam molestias optio.</p>
            <p className="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad distinctio enim error facere fugit impedit maxime modi natus odio pariatur perspiciatis porro quibusdam saepe sapiente sed sequi similique, tempora tenetur veniam veritatis vero voluptates? Cum fugit laboriosam molestias optio.</p>
            <p className="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad distinctio enim error facere fugit impedit maxime modi natus odio pariatur perspiciatis porro quibusdam saepe sapiente sed sequi similique, tempora tenetur veniam veritatis vero voluptates? Cum fugit laboriosam molestias optio.</p>
            <p className="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad distinctio enim error facere fugit impedit maxime modi natus odio pariatur perspiciatis porro quibusdam saepe sapiente sed sequi similique, tempora tenetur veniam veritatis vero voluptates? Cum fugit laboriosam molestias optio.</p>
            <p className="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad distinctio enim error facere fugit impedit maxime modi natus odio pariatur perspiciatis porro quibusdam saepe sapiente sed sequi similique, tempora tenetur veniam veritatis vero voluptates? Cum fugit laboriosam molestias optio.</p>
            <p className="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad distinctio enim error facere fugit impedit maxime modi natus odio pariatur perspiciatis porro quibusdam saepe sapiente sed sequi similique, tempora tenetur veniam veritatis vero voluptates? Cum fugit laboriosam molestias optio.</p>

        </div>
    )
}

export default InputGroup
