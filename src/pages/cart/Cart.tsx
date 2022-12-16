import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Cart.css";
const Cart = () => {
  let navigate = useNavigate();
  const [cartData, setCartData] = useState<any>([]);
  useEffect(() => {
    let savedCart = window.localStorage.getItem("cart");
    if (savedCart && savedCart != null && savedCart !== "undefined") {
      let tempdata: any = JSON.parse(savedCart);
      setCartData(tempdata);
      console.log("tempdata", tempdata);
    }
  }, []);

  return (
    <div className="shopping-cart">
      <div style={{ display: "inline-block" }}>
        <h5 className="cart-title" style={{ display: "inline-block" }}>
          Shopping Bag
        </h5>
        <Button
          type="submit"
          variant="contained"
          onClick={() => {
            navigate("/checkout-process");
          }}
          style={{ display: "inline-block", textAlign: "right" }}
        >
          Continue
        </Button>
      </div>
      <br />
      {cartData.map((item: any) => (
        <div className="item">
          <div className="cart-image">
            <img
              width="200px"
              src="https://m.media-amazon.com/images/I/61O9tWR6WDS._SX522_.jpg"
              alt="productimage"
            />
          </div>

          <div className="description">
            <h3>{item.title}</h3>
            <span>{item.description}</span>
          </div>

          <div className="total-price">{`$ ${item.price}`}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
