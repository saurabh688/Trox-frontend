import "./Product.css";
const Product = (props: any) => {
  return (
    <div className="product" key={props.data.id}>
      <div className="product__info">
        <p>{props.data.title}</p>
        <p>Brand:{props.data.brand}</p>
        <p>Description:{props.data.description}</p>
        <p className="product__price">
          <strong>{`$`+props.data.price}</strong>
        </p>
      </div>
      <img src={props.data.image} alt="" />
      <button>View Details</button>
    </div>
  );
};

export default Product;
