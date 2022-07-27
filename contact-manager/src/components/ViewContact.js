import React from "react";
import {NavLink} from "react-router-dom";

function ViewContact(){

    return(
        <div>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">View your contact here.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" className="contact-img" />
                        </div>
                        <div className="col-md-8">
                        <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            Name: <span className="fw-bold">Kevin Nzioki</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Mobile: <span className="fw-bold">0704116728</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Email: <span className="fw-bold">kevinnzioki@gmail.com</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Company: <span className="fw-bold">Moringa</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Group: <span className="fw-bold">Family</span>
                                        </li>
                                    </ul>
                        </div>
                    </div>
                    <div className="row">   
                        <div className="col">
                            <NavLink to="/" className="btn btn-warning">Back</NavLink>
                        </div>
                    </div>
                </div>
                
            </section>

        </div>

    )
}

export default ViewContact;