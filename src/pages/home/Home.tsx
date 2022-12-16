import "./Home.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, searchDataStart } from "../../redux/reduxSlice/product";
import { RootState } from "../../redux/store";
import Product from "../../components/product/Product";
import { BuyableProduct } from "../../types";
import Carousel from "react-material-ui-carousel";
import { Banner } from "../../components/banner/Banner";
import image1 from "../../assets/banner_image/banner_image_4.jpg" 
import image2 from "../../assets/banner_image/banner_image_2.jpg" 
import image3 from "../../assets/banner_image/banner_image_3.jpg" 
import { getUserStart } from "../../redux/reduxSlice/user";

const Home = () => {
  const { state } = useLocation();

  const products: any = useSelector(
    (state: RootState) => state.product.products
  );
  const [detailedProducts, setDetailedProducts] = useState<BuyableProduct[]>(
    []
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const productDetailsPage = (product: any) => {
    // console.log("click");
    // dispatch(getProduct(product.id));
    navigate("/product-details", { state: { product } });
  };

  var items = [
    {
      image : image2,
      description: "Hello World!",
    },
    {
      image: image1,
      description: "Probably the most random thing you have ever seen!",
    },
    
    {
      image : image3,
      description: "Hello World!",
    },
  ];

  useEffect(() => {
    setDetailedProducts(products);
  }, [products]);

  useEffect(() => {
    dispatch(searchDataStart(""));
  }, []);

  useEffect(() => {
    console.log("queryqueryquery", state);
    dispatch(
      searchDataStart(
        state === null || state === undefined ? "" : state?.searchValue
      )
    );
  }, [state]);

  return (
    <>
      <div className="home">
        <Carousel indicators={true} navButtonsAlwaysVisible={true}>
          {items.map((item, i) => (
            <Banner key={i} image={item.image} />
          ))}
        </Carousel>

        {detailedProducts.length
          ? detailedProducts.map((item: any) => (
              <span
                onClick={(e: any) => {
                  e.preventDefault();
                  productDetailsPage(item);
                }}
                key={item?.id.toString()}
              >
                <Product
                  data={{
                    ...item,
                    image:
                      "https://m.media-amazon.com/images/I/61O9tWR6WDS._SX522_.jpg",
                  }}
                />
              </span>
            ))
          : null}
      </div>
    </>
  );
};

export default Home;
