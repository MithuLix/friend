import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';


const Friend = (props) => {
    const {name, email, id} = props.friend;

    return (
        <div className="friend">
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Id : <Link to= {`/friend/${id}`}><button>Show Details {id}</button></Link></p>
        </div>
    );
};

export default Friend;