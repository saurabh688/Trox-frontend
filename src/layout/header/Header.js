import React, { useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Header.css'

const Header = () => {
    const [searchValue, setSearchValue] = useState(null);
    let navigate = useNavigate();

    const search = (e) =>{
 
        if(e.key === 'Enter'){
            navigate("/products");

        }
    }
    const updateQueryStringParameter =(uri, key, value)=> {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
          return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
          return uri + separator + key + "=" + value;
        }
      }
    useEffect(()=>{

        updateQueryStringParameter('http://52.54.44.196:3000/','search',searchValue)

      
    },[searchValue])

    return (
        <nav className="header">
        {/* add trox logo instead of amazon */}
        {/* importing local image from folder src={require('../assets/banner_image/banner_image_1.jpg')}*/}
        <Link to="/" className="header__link">

            <img src={require("../../assets/logo/trox.png")} alt="logo" className="header__logo" />
            </Link>
            <div className="header__search">
                <input type="text" 
                defaultValue={searchValue} 
                className="header__searchInput" 
                onChange={(e)=>{
                setSearchValue(e.target.value);
                }} 
                onKeyDown={search} />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                {/* Link 1 */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">
                            Hello, User
                        </span>
                        <span className="header__optionTwo">
                            Sign in
                        </span>
                    </div>
                </Link>
                {/* Link 2 */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">
                            Returns
                        </span>
                        <span className="header__optionTwo">
                            & Orders
                        </span>
                    </div>
                </Link>
            </div>
            {/* cart icon with number */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionCart">
                    <ShoppingCartIcon/>
                    {/* number of item in cart */}
                    <span className="header__optionTwo header__cartCount">2</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header;