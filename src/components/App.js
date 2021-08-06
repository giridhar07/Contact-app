import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import "./App.css";
import AddContact from "./AddContact";
import Header from "./Header";
import ContactList from "./ContactList"; 
import ContactDetail from "./ContactDetail";
import DeleteContact from "./DeleteContact";


function App() {
  const Local_Storage_Key = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
     
      <Router>
         <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
            <ContactList
            {...props} 
            contacts={contacts} 
            getContactId={removeContactHandler}
            />
            )} 
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={ addContactHandler }
              />
              )} 
          />

          <Route
          path="/contact/:id" component={ContactDetail}
          />

          <Route
          path="/delete/:id" component={DeleteContact} 
        />
        </Switch>
       
      </Router>
       {/* <AddContact addContactHandler={ addContactHandler }/> */}
        {/* <ContactList contacts={contacts} getContactId={ removeContactHandler }/> */}
    </div>
  );
}

export default App;
