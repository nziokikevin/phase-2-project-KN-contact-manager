import React from "react";
import {NavLink} from "react-router-dom"

function ContactList(){

    return(
        <div>
        <section className="contact-search p-2" >
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3 fw-bold">Contact Manager
                                <NavLink to={"/contacts/add"} className="btn btn-primary ms-2">
                                    <i className="fa fa-plus-circle me-1" />
                                    New</NavLink>
                            </p>
                            <p className="fst-italic">Welcome to the newest contact management system in town</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row" >
                                    <div className="col">
                                    <div className="mb-2">
                                        <input type="text"className="form-control" placeholder="Search Names" />
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-outline-dark" value="Search" />
                                    </div>
                                    </div>            
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="contact-list">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                <div className="col-md-4">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" className="contact-img" />

                                </div>
                                <div className="col-md-7">
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
                                    </ul>
                                </div>
                                <div className="col-md-1 d-flex flex-column align-items-center">
                                    <NavLink to={"/contacts/view"} className="btn btn-warning my-1">
                                        <i className="fa fa-eye" />
                                    </NavLink>
                                    <NavLink to={"/contacts/edit"} className="btn btn-primary my-1">
                                        <i className="fa fa-pen" />
                                    </NavLink>
                                    <button className="btn btn-danger my-1">
                                        <i className="fa fa-trash" />
                                    </button>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        </div>


     
    )
}

export default ContactList;