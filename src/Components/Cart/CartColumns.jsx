import React from 'react'
import cartWomen from '../../images/cartPageGirl.png';
import {ProductContext} from '../../context';
import { useContext } from 'react';
import CartList from './CartList';
import CartTotals from './CartTotals';

function CartColumns() {
    const context = useContext(ProductContext);
    const {cart} = context;
    return (
        <>
            <div className="row">
                <div className="col-10 mx-auto my-4 text-center text-title">
                    <h1 className="text-capitalize font-weight-bold text-purple">
                        <strong>Your Cart</strong>
                    </h1>
                </div>
            </div>
            <div className="container text-center mt-lg-4 cart-background">
                <div className="row cart-columns-background rounded mb-4">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">                                                
                        <CartList value={context}/>
                        <CartTotals value={context}/>            
                    </div>                    
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 align-self-center">
                        <img src={cartWomen} alt="" className="align-self-center img-fluid"/>
                    </div>
                </div>        
            </div>        
        </>
    )
}

export default CartColumns
