import React from 'react'
import {Link} from 'react-router-dom'

function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 mx-auto col-sm-8 text-capitalize text-center">
                        <Link to='/products'>
                            <button className="btn btn-outline-danger text-uppercase my-3 px-4 font-weight-bold" 
                                    type="button"
                                    onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <h5 className="font-weight-bold text-purple">
                                SubTotal: <span className="text-pink">&#8377;&nbsp;{cartSubTotal}</span> 
                            </h5>
                        </h5>
                        <h5>
                            <h5 className="font-weight-bold text-purple">
                                Tax: <span className="text-pink">&#8377;&nbsp;{cartTax}</span>
                            </h5>
                        </h5>
                        <h5>
                            <h5 className="font-weight-bold text-purple">
                                CartTotal: <span className="text-pink">&#8377;&nbsp;{cartTotal}</span>
                            </h5>
                        </h5>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default CartTotals
