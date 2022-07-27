import React from "react";
import {NavLink} from "react-router-dom"

function ContactList(){

    return(
        /*search bar and heading section*/
        <section className="contact-search p-2" >
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Contact Manager
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
         /*search bar and heading section*/

    )
}

export default ContactList;