import React from 'react';
import styled from 'styled-components';

function CartItem({item,value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div>           
            <div className="row mt-3 mb-2 text-center py-3">
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 px-0 align-self-center">
                    <img src={img} 
                        style={{width:"6rem", height:"6rem" }} 
                        alt=""
                        className="img-fluid rounded img-shadow"/><br />                        
                </div>
                <div className="col-9 col-sm-9 col-md-9 col-lg-9 pr-0">
                    <CardContainer className="card card-header">
                        <div className="row">
                            <div className="col-7 col-lg-6 col-sm-7 col-md-6 font-weight-bold text-purple">
                                {title}
                                <div className="text-purple font-weight-light small-text">
                                    1 Pc
                                    <span className="text-pink font-weight-bold">
                                        &nbsp;&#8377;&nbsp;{price}
                                    </span>     
                                    <div className="cart-icon" onClick={() => removeItem(id)}>
                                        <i className="fas fa-trash text-green"></i>
                                    </div>
                                </div>                                   
                            </div>
                            <div className="col-5 col-lg-6 col-sm-5 col-md-6">
                                <div className="d-flex justify-content-center button-plus-minus px-lg-1">
                                    <span className="btn btn-black mx-0 px-1 py-0" onClick={() => decrement(id)}>
                                        <i className="fa fa-minus"></i>
                                    </span>
                                    <span className="btn text-purple font-weight-bold mx-0 px-1 py-0">{count}</span>
                                    <span className="btn btn-black mx-0 px-1 py-0" onClick={() => increment(id)}>
                                        <i className="fa fa-plus"></i>
                                    </span>
                                </div>
                                    <div className="text-purple font-weight-bold mt-lg-3">
                                        Total: 
                                        <span className="text-pink font-weight-bold pt-0"> &#8377;&nbsp;{total}</span>
                                    </div>
                                {/* {total} */}
                            </div>
                        </div>                                
                    </CardContainer>                    
                </div>
            </div>
        </div>                
            
    )
}

const CardContainer = styled.div`
    border-color: transparent !important;
    background: white !important; 
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    border-radius: 10px !important;
`

export default CartItem
