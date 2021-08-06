import React from 'react'
import { Link } from 'react-router-dom';
import user1 from "../images/user1.png";

const ContactDetail = (props) => {
    const{ name, email } = props.location.state.contact
    return (  
            <div className="main">
                <div className="ui card centered">
                    <div className="image">
                        <img src={user1} alt="user" />
                    </div>
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="description">{email}</div>
                    </div>
                </div>
                <div className="ui center aligned container">
                    <Link to="/">
                        <button className="ui inverted blue button">
                            Back to Contact List
                        </button>
                    </Link>
                </div>
            </div>  
    );
};

export default ContactDetail
