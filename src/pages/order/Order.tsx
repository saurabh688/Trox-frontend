import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./Order.css";

const Order = () => {
  const [orderData, setOrderData] = useState<any>([]);
  const userData: any = useSelector((state: RootState) => state.user);

  useEffect(() => {
    let savedCart = window.localStorage.getItem("cart");
    if (savedCart && savedCart != null && savedCart !== "undefined") {
      let tempdata: any = JSON.parse(savedCart);
      setOrderData(tempdata);
      console.log("setOrderDatasetOrderDatasetOrderData", tempdata);
    }
  }, []);

  useEffect(() => {
    console.log("userDatauserDatauserData", userData);
  }, [userData]);

  return (
    <div className="order-container">
      <hr className="my-4" />
      {/* <li> */}
      <h1 className="card-title"> Your orders </h1>
      <article className="card border-primary mb-4">
        <div className="card-body">
          <header className="d-lg-flex">
            <div className="flex-grow-1">
              <h2 className="mb-0">
                Order ID: 8924 <i className="dot"></i>
                <span className="text-success"> Shipped</span>
              </h2>

              {/* <hr /> */}
              <div className="container-fluid">
                <div className="orderContainer">
                  <div className="row">
                    <div className="col-lg-3">
                      <p className="mb-0 text-muted">Contact</p>
                      <p className="m-0">
                        {userData.user?.fullName} <br /> Phone: 371-295-9131{" "}
                        <br /> {userData.user?.emailID}{" "}
                      </p>
                    </div>
                    <div className="col-lg-3 border-start shippingClass">
                      <p className="mb-0 text-muted">Shipping address</p>
                      <p className="m-0">
                        {" "}
                        United States <br />9 Garrison AveJersey City, NJ 07306
                      </p>
                    </div>
                    <div className="col-lg-3 border-start paymentClass">
                      <p className="mb-0 text-muted">Payment</p>
                      <p className="m-0">
                        <span className="text-success"> Visa **** 4216 </span>{" "}
                        <br />
                        Shipping fee: $56 <br />
                      </p>
                    </div>
                    <div className="col-lg-3 leftClass">
                      <a href="#" className="btn-danger">
                        Cancel order
                      </a>
                      <a href="#" className="btn-success">
                        Track order
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <hr /> */}
              <br />
              <br />
              <h3 className="text-muted">
                    {new Date().toLocaleDateString("en-us", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </h3>
              <div style={{paddingLeft:"16px", display:"flex"}}>
                
              {orderData.map((item: any) => (
                <div style={{marginRight:"16px"}}>
                 
                  <span className="orderdesc">
                    <img
                      width="300px"
                      height="300px"
                      src={"https://solesavy.com/wp-content/uploads/2022/08/Air-Jordan-1-Lost-and-Found-DZ5485-612-Release-Date-731x770.jpeg"}
                      className="img-sm rounded border"
                    />
                    <a className="title">{item.title}</a>
                    <h4> {item.title}</h4>
                  </span>
              
                </div>
              ))}
              </div>
            </div>
          </header>
        </div>
      </article>
    </div>
  );
};
export default Order;
