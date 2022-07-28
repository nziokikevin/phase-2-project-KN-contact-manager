import React from "react";
import {Switch, Route} from "react-router-dom";
import ContactList from "./ContactList";
import NavBar from "./NavBar";
import AddContact from "./AddContact";
import ViewContact from "./ViewContact";
import EditContact from "./EditContact";

function App(){
  
  return(
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" >
          <ContactList />
        </Route>
        <Route exact path="/contacts/add" >
          <AddContact />
        </Route>
        <Route exact path="/contacts/view/:contactId" >
          <ViewContact />
        </Route>
        <Route exact path="/contacts/edit/:contactId" >
          <EditContact />
        </Route>
      </Switch>
    </div>
  )
}

export default App;