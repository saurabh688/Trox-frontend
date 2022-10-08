import React from 'react';

import Header from '../../layout/header/Header';
import Product from '../../components/home/Product';
import './Products.css';

const Products = () => {
    return (
        <>
            <Header/>
            <div className="home">
                <div className="home__row">
                    <Product
                        id="121314"
                        title="Handbags for Women Shoulder Bags Tote Satchel Hobo 3pcs Purse Set"
                        price={69.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71PtbKQvcDL._AC_UY695_.jpg"
                    />
                    <Product
                        id="121314"
                        title="Under Armour Adult Ozsee Sackpack"
                        price={100.00}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/51-kx0ZfXpL._AC_UY879_.jpg"
                    />
                    <Product
                        id="121314"
                        title="Under Armour Undeniable 5.0 Duffle"
                        price={21.95}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51lL8r2nzwL._AC_SX679_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="121314"
                        title="Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port"
                        price={150.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81p91cnIFEL._AC_SX679_.jpg"
                    />
                    <Product
                        id="121314"
                        title="KROSER Laptop Backpack 15.6 Inch Stylish School Computer Backpack Doctor Bag Water Repellent College Casual Daypack"
                        price={1049.00}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/714nn-ZKm2S._AC_SX679_.jpg"
                    />
                    <Product
                        id="121314"
                        title="Estarer Computer Messenger Bag 17-17.3 Inch Water-resistance Canvas Laptop Shoulder Bag for Travel Work College New Version"
                        price={40.00}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/71L3mgYCz-L._AC_SX679_.jpg"
                    />
                    <Product
                        id="121314"
                        title="Laptop Backpack for Men Women Expandable Travel Backpack 17.3 Inch BAGSMART School Bag with Charging Port,for College Work"
                        price={21.95}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81NWjotQ1AL._AC_UX679_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="121314"
                        title="
                        Lunch Backpack, Lunch Box Backpack for Women Men with USB Charging Port RFID Pockets Insulated Cooler Backpacks for Work"
                        price={50.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/91sMzccLZLL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="121314"
                        title="Estarer Computer Messenger Bag 17-17.3 Inch Water-resistance Canvas Laptop Shoulder Bag for Travel Work College New Version"
                        price={40.00}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/71L3mgYCz-L._AC_SL1302_.jpg"
                    />
                    <Product
                        id="121314"
                        title="
                        Voova Travel Laptop Backpack for Men Women, Slim Lightweight Backpack School Bookbag with Laptop Compartment for Work Business and College"
                        price={30.95}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/713uH1SSJ3S._AC_SL1500_.jpg"
                    />
                </div>
            </div>
        </>
    )
};

export default Products;