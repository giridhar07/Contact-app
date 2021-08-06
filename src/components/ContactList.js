import React from 'react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

export const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
           <ContactCard 
           contact={contact} 
           clickHander={deleteContactHandler} 
           key={contact.id} /> 
        );
    });
    return (
        <div class="row">
            <h2 class="ui header">Contact List
                <Link to="/add">
                    <button className="ui right floated button blue">Add Contact</button>
                </Link>
            </h2>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    );
};

export default ContactList;