import React from 'react';

import './Product.css'

const Product = ({ id, title, image, price, rating,brand, desc }) => {
    return (
        <div className="product" key={id}>
            <div className="product__info">
            <p>{title}</p>
            <p>Brand:{brand}</p>
            <p>Description:{desc}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map(() => (
                                <p>*</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button>Add to Basket</button>
        </div>
    )
};

export default Product;