import React from "react";
import {NavLink} from "react-router-dom"

function EditContact(){

    return(
        <div>
           <section className="view-contact p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary fw-bold ">Edit Contact</p>
                        <p className="fst-italic">Edit your contact below.</p>
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
                                <input type="submit" className="btn btn-primary" value="Edit" />
                                <NavLink to="/" className="btn btn-danger ms-2">Cancel</NavLink>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                    <img src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="" className="contact-img" />
                    </div>
                </div>
            </div>
           </section>
        </div>
    )
}

export default EditContact;