import React from "react"
import "./Cards.css"
import img1 from "../../assets/img/person1.jpg"
import img2 from "../../assets/img/person2.jpg"
import img3 from "../../assets/img/person3.jpg"
const CardExample = () =>{
    return(
        <div className="container mt-5">
            <div className="card bg-white w-25">
                <div className="card-body bg-white">
                    <div className="body-content">
                        <div className="person-detail">
                            <div className="img-rounded">
                                <img src={img1} className="img-fluid img-border-custom" alt=""/>
                            </div>
                            <h5 className=" h2 font-weight-bold mt-3">Laura williams</h5>
                        </div>
                        <p>Trainer</p>
                        <div className="texts-wrapper">
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus animi cum id in iste itaque, nobis nulla suscipit. Veniam.</p>
                        </div>
                        <div className="icons-container">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardExample
