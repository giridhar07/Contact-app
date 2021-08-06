import React from 'react'
import { Link } from 'react-router-dom';

const DeleteContact = (props) => {
    const{ id, name, email } = props.location.state.contact;
    return (
        <div className="card border-0 my-2" key={id}>
            <div id="response-msg" className="alert alert-sucess" role="alert" style={{display:"none"}}></div>
                <div className="card-body p-0">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                </div>
                <button className="btn btn-primary btn-sm" onClick={() => {if (window.confirm("Are you Sure want to delete?")){props.deleteContactHandler(props)}}}>
                Delete
                </button>
        </div>
       
    );
}

export default DeleteContact
