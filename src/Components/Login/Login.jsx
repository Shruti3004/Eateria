import React, { useState, useContext } from 'react'
import firebase from '../Config/Config';
import {ButtonContainer} from '../Button';
import logo from '../../images/eateriaLogo.png';
import {Link} from 'react-router-dom';
import { AuthContext} from '../../Auth';
import swal from 'sweetalert';

function Login(props) {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordType, setPasswordType] = useState({type:'password'});
    const {currentUser} = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        firebase.login(email, password)
        .then(() => {
            if(currentUser.emailVerified){
                props.history.push('/products')
            }else{
                firebase.logout();
            }        
        })
        .catch(error => {
            swal({text: error.message,icon: "error", dangerMode: true});
        });
    }

    const showHide = e => {
        setPasswordType(
            {type: passwordType.type === 'password' ? 'text' : 'password',}
        )
    }

    const handlePassword = () => {
        if(email !== null ){
            firebase.resetPassword(email)
            .then(() => {
                swal({title: "Check your mailbox!!",text: "Password reset link is sent to your mail id", icon: "success"});
            })
            .catch(error => {                                  
                swal({text: error.message, icon: "error",dangerMode: true});
              });
        }else{
            swal({text: "Enter the valid email", icon: "error",dangerMode: true});
        }
    }

    // const error = () => {
    //     <ErrorModel />
    // }

    return (
        <div className="sign-in">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12 col-12 form-center">
                    <div className="sign-in-form p-4">
                        <div className="d-flex justify-content-center mb-5">
                            <img src={logo} alt="logo"/>
                        </div>
                        <h4 className="text-center text-purple font-weight-bold">Sign In</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group my-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text background-pink px-3"><i className="fas fa-envelope text-white"/></span>
                                </div>
                                <input type="email" className="form-control text-purple" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className="input-group mt-4 mb-1">
                                <div className="input-group-prepend">
                                    <span className="input-group-text background-pink px-3"><i className="fas fa-lock text-white"/></span>
                                </div>
                                <input type={passwordType.type} className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                <div className="input-group-prepend">
                                    <span className="input-group-text background-white px-1" onClick={showHide}>{passwordType.type === 'password' ? <i className="fas fa-eye text-pink"/> : <i className="fas fa-eye-slash text-pink"/> } </span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end px-0 text-purple">
                                <a onClick={handlePassword}>Forgot password?</a>
                            </div>
                            <ButtonContainer className="background-pink w-100 mt-5" cartBtn><input type="submit" value="Login" className="text-white btn"/></ButtonContainer>
                            {/* <p className="text-center mt-3">Don't have an Account?</p> */}
                            <Link to="/register">
                                <ButtonContainer className="background-pink w-100 mt-2" cartBtn><button className="text-white btn">Register</button></ButtonContainer>
                            </Link>
                        </form>
                    </div>
                </div>
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
