import React from 'react';
import {Link} from 'react-router-dom';

function HomePage(props) {
    return (
        <div className="container d-flex justify-content-center my-5">
            <button 
            className="btn btn-primary my-3"
            onClick={() => {props.history.push('/register')}}>
                Register
            </button>
            <button 
            className="btn btn-primary my-3"
            onClick={() => {props.history.push('/login')}}>
                Login
            </button>
            <button 
            className="btn btn-primary my-3"
            onClick={() => {props.history.push('/dashboard')}}>
                Dashboard
            </button>            
        </div>
    )
}

export default HomePage