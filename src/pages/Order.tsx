import { listClasses } from '@mui/material';
import React from 'react'
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Order.css";

const Order = () => {
  return (
        <div>
         
            <hr className="my-4" />
            {/* <li> */}
            <h1 className="card-title"> Your orders </h1> 
            <article className="card border-primary mb-4">
            <div className="card-body">
              <header className="d-lg-flex">
                <div className="flex-grow-1">
                  <h2 className="mb-0">Order ID: 8924 <i className="dot"></i>  
                    <span className="text-success"> Shipped</span>
                  </h2>
                  <span className="text-muted">Date: 16 December 2018</span>
                </div>
                <div className="orderdesc">
                <img width="72" height="72" src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/items/2.jpg" className="img-sm rounded border" />
                <a className="title">Nikon D3400, Nikon , Telephoto Lens , 48Mp Camera.</a> 
                </div>
                
              </header>
              {/* <hr /> */}
              <div className='container-fluid'>
                <div className='orderContainer'>
                  <div className="row">
                    <div className="col-lg-3">
                      <p className="mb-0 text-muted">Contact</p>
                      <p className="m-0"> 
                        Mike Johnatan <br />  Phone: 371-295-9131 <br /> Email: info@mywebsite.com </p>
                    </div> 
                    <div className="col-lg-3 border-start shippingClass">
                      <p className="mb-0 text-muted">Shipping address</p>
                      <p className="m-0"> United States <br /> 
                        3601 Old Capitol Trail, Unit A-7, Suite 170777, Wilmington, DE 19808   </p>
                    </div> 
                    <div className="col-lg-3 border-start paymentClass">
                      <p className="mb-0 text-muted">Payment</p>
                      <p className="m-0">
                        <span className="text-success"> Visa  **** 4216   </span> <br /> 
                        Shipping fee:  $56 <br /> 
                        Total paid:  $456 
                      </p>
                    </div>
                    <div className="col-lg-3 leftClass">
                        <a href="#" className='btn-danger'>Cancel order</a>
                      <a href="#" className='btn-success'>Track order</a>
                    </div>
                  </div>
                  
                </div>
                </div>
                
              {/* <hr /> */}
              <ul className="row">
                <li className="col-xl-4  col-lg-6">
                  <figure className="itemside mb-3">
                    <div className="aside">
                      <img width="72" height="72" src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/items/1.jpg" className="img-sm rounded border" />
                    </div>
                    <figcaption className="info">
                      <p className="title">T-shirts with multiple colors</p>
                      <strong> 2x = $339.90 </strong>
                    </figcaption>
                  </figure> 
                </li>
                <li className="col-xl-4  col-lg-6">
                  <figure className="itemside mb-3">
                    <div className="aside">
                      <img width="72" height="72" src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/items/2.jpg" className="img-sm rounded border" />
                    </div>
                    <figcaption className="info">
                      <p className="title">Gaming Headset 32db Black</p>
                      <strong> 2x = $339.90 </strong>
                    </figcaption>
                  </figure>
                </li>
                <li className="col-xl-4  col-lg-6"> 
                  <figure className="itemside mb-3">
                    <div className="aside">
                      <img width="72" height="72" src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/items/7.jpg" className="img-sm rounded border" />
                    </div>
                    <figcaption className="info">
                      <p className="title">Apple Watch Series 4 Space Gray</p>
                      <strong> 2x = $339.90 </strong>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div> 
            </article> 
            {/* </li> */}
            </div>
            )
}
export default Order;