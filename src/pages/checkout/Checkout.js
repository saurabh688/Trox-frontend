import React from 'react';

import Header from '../../layout/header/Header';
import Subtotal from '../../components/checkout/Subtotal';
import './Checkout.css'

const Checkout = () => {
    return (
        <>
            <Header/>
            <div className="checkout">
                <div className="checkoutLeft">
                    <div>
                        <h2 className="checkout__title">Your shopping basket is empty</h2>
                        <p>You have no item in your basket. Buy one.</p>
                    </div>
                </div>
                <div className="checkoutRight">
                    <Subtotal/>
                </div>
            </div>
        </>
    )
};

export default Checkout;