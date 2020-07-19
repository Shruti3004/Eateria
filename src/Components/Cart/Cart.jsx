import React from 'react';
import CartColumns from './CartColumns';
import Navbar from '../Navbar';
import EmptyCart from './EmptyCart';
import {ProductContext} from '../../context';
import { useContext } from 'react';
import PaymentButton from '../PaymentButton';

function Cart() {
    const context = useContext(ProductContext);
    const {cart} = context;
    if(cart.length>0){
        return(
            <>
                <Navbar />                
                <CartColumns />  
                <PaymentButton />
            </>
        )
    }else{
        return(
            <>
                <Navbar />
                <EmptyCart />
            </>
    )}
}

export default Cart
