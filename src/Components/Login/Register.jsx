import React, { useState } from 'react';
import firebase from '../Config/Config';
import fire from 'firebase';

function Register(props) {
    
    var ID = null;
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
    
    const handleSubmit = e => {
        e.preventDefault();
        onRegister();
    }

    async function onRegister() {
		try {
            firebase.register(name,lastName, email, password)
                .then(() => {
                    firebase.emailVerification()
                    .then(() => {
                        ID = setInterval(() => {
                            fire
                              .auth()
                              .currentUser.reload()
                              .then(() => {
                                if (fire.auth().currentUser.emailVerified) {
                                  clearInterval(ID);
                                  ID = null;
                                  props.history.push('/products');
                                }
                              });
                        }, 1000);
                    }) 
                })                                         			
		}catch(error) {
			alert(error.message)
		}
	}
    return (
        <div className="container">
            <h4>Sign up</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="First Name" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" className="form-control" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
                <input type="email" className="form-control" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" className="form-control" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>                
                <input type="submit" value="Register"/>
                <button onClick={() => {props.history.push('/login')}}>Go back to login</button>
                
            </form>
        </div>
    )

}

export default Register
