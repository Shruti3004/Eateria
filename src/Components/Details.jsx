import React, { useContext } from 'react';
import { ProductContext } from '../context';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

function Details() {
    const {detailProduct, addToCart, openModal} = useContext(ProductContext);
    const {id, company, title, img, info, price, inCart} = detailProduct;
    return (
        <>
        <Navbar />
        <div className="container mb-3"> 
            <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-3">
                    <h1 className="font-weight-bold text-purple">{title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="product"/>
                </div>
                <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
                    <h2 className="font-weight-bold text-purple mb-3">model: {title}</h2>
                    <h4 className="text-purple mb-3">
                        <strong>Made by: <span className="text-capitalize">{company}</span></strong>
                    </h4>
                    <h4 className="text-pink mb-3">
                        <strong>
                            price: {price}
                        </strong>
                    </h4>
                    <h5 className="text-capitalize font-weight-bold mb-1 text-purple">
                        some info about product
                    </h5>
                    <p className="text-purple">
                        {info}
                    </p>
                    <div>
                        <Link to="/products">
                            <ButtonContainer>Back to Products</ButtonContainer>
                        </Link>
                        <ButtonContainer cartBtn 
                        disabled={inCart?true:false} 
                        onClick={() => {
                            addToCart(id);
                            openModal(id);
                            }}>
                            {inCart? "In Cart" : "Add to Cart"}
                        </ButtonContainer>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Details
