import React, { useContext, useState } from 'react';
import Product from './Product';
import Navbar from './Navbar';
import girl from '../images/menuPageGirl.png';
import { ProductContext } from '../context'
import PaymentButton from './PaymentButton';

function ProductList() {
    const {products} = useContext(ProductContext);
    const [search, setSearch] = useState('');

    const filteredItems = products.filter(product => {
        return product.title.toLowerCase().includes(search.toLowerCase());
    });
    
    return (
        <>
            <Navbar />
            <div className="menu-background">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-12 col-sm-12">
                            <h1 className="font-weight-bold py-5 text-purple text-uppercase main-heading">
                                <strong>
                                    hungry?<br />
                                    <span className="text-pink">Trouble </span>
                                    finding a table?<br />
                                    can not <span className="text-pink">decide </span>
                                    what to <span className="text-pink">eat?</span>
                                </strong>
                            </h1>
                            <h2 className="font-weight-bold py-4 text-purple">
                                <span className="text-pink">Eateria </span>
                                is here to 
                                <span className="text-pink"> help </span>
                                you now.
                            </h2>
                            <div className="form-group row">
                                <div className="col-lg-6">
                                    <div className="input-group mt-4">
                                        <input type="text" className="form-control text-purple text-capitalize" placeholder="What are you craving for?" onChange={(e) => setSearch(e.target.value)}/>
                                        <div className="input-group-append">
                                            <span className="input-group-text background-pink px-3"><i className="fas fa-search text-white" /></span>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block">
                            <img src={girl} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                <div className="row">
                    <div className="col-10 mx-auto my-2 text-center text-title">
                        <h1 className="text-capitalize font-weight-bold text-purple">
                            <strong>Our Recipies</strong>
                        </h1>
                    </div>
                </div>
                    <div className="row">
                        {filteredItems.map(product => {
                            return (
                                <Product key={product.id} product={product}/>
                            )
                        })}
                    </div>
                    <PaymentButton />
                </div>
            </div>
        </>
    )
}


export default ProductList
