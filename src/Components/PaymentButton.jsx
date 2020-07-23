import React from 'react';
import styled from 'styled-components';
// import { ProductContext } from '../context';


function PaymentButton() {
    // const context = useContext(ProductContext);
    // const {cartTotal} = context;
    // const handlePayment = () => {
    //     window.location.href = `http://localhost:5000`
    // }
    return (
        <div className="container">
            <PayButton className=" btn font-weight-bold w-100">Proceed to Pay</PayButton>
        </div>
    )
}

const PayButton = styled.button`
    text-decoration-line: none !important;    
    border-radius: 60px !important;
    padding: 0.3rem 1.9rem !important;
    background: var(--mainBlue);
    color: white;
    &:hover{
        background: var(--lightBlue);
        color: var(--mainWhite);        
    }
`

export default PaymentButton
