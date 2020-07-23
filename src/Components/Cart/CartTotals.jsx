import React from 'react'
import {Link} from 'react-router-dom';
import orderTaken from '../../images/orderTaken.png';

function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 mx-auto col-sm-8 text-center">
                        <Link to='/products'>
                            <button className="btn btn-outline-danger my-3 px-4 font-weight-bold" 
                                    type="button"
                                    onClick={() => clearCart()}>
                                Clear Cart
                            </button>
                        </Link>
                    </div>
                    <div className="col-12 my-2 col-sm-12 col-md-12 col-lg-12 text-center">
                        <div className="font-weight-bold text-purple">
                            <img src={orderTaken} alt=""/>
                            &nbsp;&nbsp;Order Taken
                        </div>
                        <hr/>
                        <div>
                            <p className="small-text text-muted font-weight-bold pb-0 mb-0">
                                SubTotal:<span className="text-pink">&#8377;&nbsp;{cartSubTotal}</span>&nbsp;
                                Tax: <span className="text-pink">&#8377;&nbsp;{cartTax}</span>
                            </p>
                            <h5 className="font-weight-bold text-purple">
                                CartTotal: <span className="text-pink">&#8377;&nbsp;{cartTotal}</span>
                            </h5>                            
                        </div>
                        
                        {/* <h5>
                            
                        </h5>
                        <h5>
                            
                        </h5>
                        <h5>
                            
                        </h5> */}
                    </div>
                </div>
            </div>   
        </>
    )
}

export default CartTotals
