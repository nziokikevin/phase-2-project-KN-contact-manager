import React, {useState} from "react";
import {NavLink} from "react-router-dom"

function AddContact(){
    const[contactAdd, setContactAdd] = useState({
        contact:{
            name:'',
            phone:'',
            email:'',
            company:'',
            group:''
        },
    })

    const updateInput = (e) => {
        setContactAdd({...contactAdd, contact:{...contactAdd.contact,[e.target.name]:e.target.value}})
    }

    const{contact} = contactAdd;

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
                                <input
                                required={true} 
                                name="name"
                                value={contact.name}
                                onChange={updateInput}
                                type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="mb-2">
                                <input
                                required={true} 
                                name="mobile"
                                value={contact.phone}
                                onChange={updateInput}
                                type="number" className="form-control" placeholder="Mobile" />
                            </div>
                            <div className="mb-2">
                                <input 
                                required={true} 
                                name="email"
                                value={contact.email}
                                onChange={updateInput}
                                type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="mb-2">
                                <input 
                                required={true} 
                                name="company"
                                value={contact.company}
                                onChange={updateInput}
                                type="text" className="form-control" placeholder="Company" />
                            </div>
                            <div className="mb-2">
                                <select 
                                required={true} 
                                name="group"
                                value={contact.group}
                                onChange={updateInput}
                                className="form-control">
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
                    <img src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="" className="contact-img" />
                    </div>
                </div>
            </div>
           </section>
        </div>
    )
}

export default AddContact;
