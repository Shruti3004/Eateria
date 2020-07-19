import React, { useState } from 'react'
import {Link, withRouter} from 'react-router-dom';
import firebase from '../Config/Config';

function Login(props) {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        firebase.login(email, password)
        .then(props.history.push('/products'))
        .catch(error => {
            alert(error.message)
        });
    }

    const handlePassword = () => {
        if(email !== null ){
            firebase.resetPassword(email)
            .then(() => {
                alert('Check your mail!!!')
              })
              .catch(error => {
                alert(error.message)
              });
        }else{
            alert('enter the valid email')
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <h2 className="text-center text-purple font-weight-bold">Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group my-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text background-pink px-3"><i className="fas fa-envelope text-white"/></span>
                            </div>
                            <input type="email" className="form-control text-purple text-capitalize" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-group my-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text background-pink px-3"><i className="fas fa-lock text-white"/></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                            <div className="input-group-prepend">
                                <span className="input-group-text px-1"><i className="fas fa-eye text-white"/></span>
                            </div>
                        </div>
                        
                        <input type="submit" value="Login"/>                
                        <button onClick={() => {props.history.push('/register')}}>Register</button>
                        <a onClick={handlePassword}>forgot password?</a>
                    </form>
                </div>
            </div>            
        </div>
    )

    // async function login() {
	// 	try {
	// 		await firebase.login(email, password)
	// 		props.history.replace('/dashboard')
	// 	} catch(error) {
	// 		alert(error.message)
	// 	}
	// }
}

export default Login
