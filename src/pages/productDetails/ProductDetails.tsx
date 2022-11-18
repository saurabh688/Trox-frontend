import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BuyableProduct } from "../../types";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { state } = useLocation();
  let navigate = useNavigate();
  const [productDetailsValue, setProductDetailsValue] =
    useState<BuyableProduct>();

  const addToCart = () => {
    let cartValue = [];
    let savedCart = window.localStorage.getItem("cart");
    console.log(savedCart)

    if (savedCart && savedCart !== null && savedCart !== 'undefined') {
      let tempdata = JSON.parse(savedCart);
      console.log(tempdata)
      cartValue.push(tempdata);
      cartValue.push(productDetailsValue);
      window.localStorage.setItem("cart", JSON.stringify(cartValue));
    } else {
      window.localStorage.setItem("cart", JSON.stringify(productDetailsValue));
    }

    navigate("/cart", { state: { productDetailsValue } });
  };

  useEffect(() => {
    console.log("statat", state);
    if (
      state !== null &&
      state !== undefined &&
      state.product !== null &&
      state.product !== undefined
    ) {
      setProductDetailsValue(state.product);
    }
  }, [state]);

  return (
    <>
      <div className="container">
        <div className="left-column">
          <img
            data-image="red"
            className="active"
            src="https://m.media-amazon.com/images/I/61O9tWR6WDS._SX522_.jpg"
            // src={productDetailsValue?.productGroupImageUrl&&productDetailsValue?.productGroupImageUrl.length>0 ?productDetailsValue?.productGroupImageUrl[0]:""}
            alt=""
          />
        </div>

        {/* <!-- Right Column --> */}
        <div className="right-column">
          {/* <!-- Product Description --> */}
          <div className="product-description">
            <span>{productDetailsValue?.category}</span>
            <h1>{productDetailsValue?.title}</h1>
            <p>{productDetailsValue?.description}</p>
          </div>

          {/* <!-- Product Configuration --> */}
          <div className="product-configuration">
            {/* <!-- Product Color --> */}
            <div className="product-color">
              <span>Color</span>

              <div className="color-choose">
                <div>
                  <input type="radio" name="color" />
                  <label htmlFor={productDetailsValue?.color}>
                    <span
                      style={{
                        backgroundColor: productDetailsValue?.color,
                        width: "40px",
                      }}
                    ></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <span className="info-heading">
                  {" "}
                  <b>Shipping:</b>&nbsp;{" "}
                </span>
                <b>Free</b> Shipping 3-5 days <br />
              </div>
              <div>
                <span className="info-heading">
                  {" "}
                  <b> Returns:</b>&nbsp;
                </span>{" "}
                30 days return policy <br />
              </div>
              <br />
              <div
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  display: "flex",
                }}
              >
                <span className="info-heading">
                  {" "}
                  <b> Payments:</b>&nbsp;
                </span>{" "}
                <img
                  src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppmcvdam.png"
                  alt="Buy now with PayPal"
                  style={{
                    display: "inline-block",
                    position: "relative",
                    bottom: "7px",
                  }}
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* <!-- Product Pricing --> */}
          <div className="product-price">
            <span>{productDetailsValue?.salePrice}</span>
            <a href="#" className="cart-btn" onClick={addToCart}>
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
