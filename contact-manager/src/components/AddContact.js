import React from "react";
import {NavLink} from "react-router-dom"

function AddContact(){

    return(
        <div>
           <section className="add-contact p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success fw-bold">Create Contact</p>
                        <p className="fst-italic">Add new contact below.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="mb-2">
                                <input type="number" className="form-control" placeholder="Mobile" />
                            </div>
                            <div className="mb-2">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Company" />
                            </div>
                            <div className="mb-2">
                                <select className="form-control">
                                    <option value="">Select a group</option>
                                </select>
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="btn btn-success" value="Add" />
                                <NavLink to="/" className="btn btn-danger ms-2">Cancel</NavLink>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" className="contact-img" />
                    </div>
                </div>
            </div>
           </section>
        </div>
    )
}

export default AddContact;
