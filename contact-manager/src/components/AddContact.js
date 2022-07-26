import React, {useState} from "react";

function AddContact(){
    const[contactAdd, setContactAdd] = useState({
        name:"",
        email:""
    })

    function handleChange(e){
        setContactAdd({...contactAdd, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        contactAdd.value=""
        setContactAdd("")
        e.target.reset()
    }
    return(
    <form className="addContactForm" onSubmit={handleSubmit} >
        <div>
            <h3>Name</h3>
            <input placeholder="Name" name="name" onChange={handleChange} value={contactAdd.name} />
        </div>
        <div>
            <h3>Email</h3>
            <input placeholder="Email"  name="email" onChange={handleChange} value={contactAdd.email} />
        </div>
      <button style={{background:"blue", marginTop:"10px"}}>Add</button>
    </form>
    )
    
}
export default AddContact;
