import React from 'react';

import Header from '../../layout/header/Header';
import Product from '../../components/home/Product';
import './Home.css';
import BannerSlider from '../../components/home/BannerSlider.js';

const Home = () => {
    return (
        <>
            <Header/>
            <div className="home">
                <BannerSlider/>
                {/* add categories here */}
                <div className="home__row">
                    <Product
                        id="121314"
                        title="PlayStation DualSense Wireless Controller – Midnight Black"
                        price={69.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61O9tWR6WDS._SX522_.jpg"
                    />
                    <Product
                        id="121314"
                        title="Overhyped phone, Pacific Blue - Unlocked"
                        price={1049.00}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SX679_.jpg"
                    />
                    <Product
                        id="121314"
                        title="Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black"
                        price={21.95}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX466_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="121314"
                        title="PlayStation DualSense Wireless Controller – Midnight Black"
                        price={150.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61O9tWR6WDS._SX522_.jpg"
                    />
                    <Product
                        id="121314"
                        title="Overhyped phone, Pacific Blue - Unlocked"
                        price={1049.00}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SX679_.jpg"
                    />
                    <Product
                        id="121314"
                        title="PlayStation 3 Wireless Controller – Midnight Black"
                        price={40.00}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/61O9tWR6WDS._SX522_.jpg"
                    />
                    <Product
                        id="121314"
                        title="Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black"
                        price={21.95}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX466_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="121314"
                        title="PlayStation DualSense Wireless Controller – Midnight Black"
                        price={150.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61O9tWR6WDS._SX522_.jpg"
                    />
                    <Product
                        id="121314"
                        title="Overhyped phone, Pacific Blue - Unlocked"
                        price={1049.00}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SX679_.jpg"
                    />
                </div>
            </div>
        </>
    )
};

export default Home;