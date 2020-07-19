import React, {useState, useContext} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {AuthContext} from '../../Auth'

function Dashboard() {
    const {currentUser} = useContext(AuthContext);

    if(currentUser!==null){
        return (
            <>
                <h1>{currentUser.email}</h1>
                <img src={currentUser.photoURL}  alt="User"/>
                <h1>{currentUser.displayName}</h1>
            </>
            )
    }else{
        return <h1>no</h1>
    }
}

export default Dashboard
