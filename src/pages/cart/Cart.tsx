import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Cart.css";
const Cart = () => {
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
      <div className="title">Shopping Bag</div>
      {cartData.map((item: any) => (
        <div className="item">
          <div className="buttons">
            <span className="delete-btn"></span>
            <span className="like-btn"></span>
          </div>

          <div className="image">
            <img width={"50px"} src="https://m.media-amazon.com/images/I/61O9tWR6WDS._SX522_.jpg" alt="productimage" />
          </div>

          <div className="description">
            <span>{item.title}</span>
            <span>{item.description}</span>
          </div>

          <div className="quantity">
            <button className="plus-btn" type="button" name="button">
              <img src="plus.svg" alt="" />
            </button>
            <input type="text" name="name" value="1" />
            <button className="minus-btn" type="button" name="button">
              <img src="minus.svg" alt="" />
            </button>
          </div>

          <div className="total-price">{`$ ${item.price}`}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
