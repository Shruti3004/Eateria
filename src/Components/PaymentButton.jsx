import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function PaymentButton() {
    return (
        <Link to="/cart">
            <div className="container mt-5">
                <PayButton className=" btn font-weight-bold w-100">Proceed to Pay</PayButton>
            </div>            
        </Link>
    )
}

const PayButton = styled.button`
    text-decoration-line: none !important;
    width: 100%;
    border-radius: 60px !important;
    background: var(--mainBlue);
    color: white;
    &:hover{
        background: var(--lightBlue);
        color: var(--mainWhite);        
    }
`

export default PaymentButton
