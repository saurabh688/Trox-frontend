import "./Listing.css";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
  Chip,
} from "@material-ui/core";
import React, {
  useState,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
} from "react";
import { types } from "util";
import { BuyableProduct } from "../../types";
import { createProductStart } from "../../redux/reduxSlice/product";
import { RootState } from "../../redux/store";
// import { uploadDocumentsStart } from "redux/upload";
import snack from "../../components/wrapper/snack";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Listing = () => {
  const userData: any = useSelector((state: RootState) => state.user);
  const productState: any = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState<BuyableProduct>({
    title: "",
    description: "",
    color: "",
    size: "",
    category: "",
    brand: "",
    condition: "",
    salePrice: 0,
    shippingCostStandard: 0,
    shippingCostExpedited: 0,
    shippingLength: "",
    shippingWidth: "",
    shippingHeight: "",
    shippingWeight: "",
    productGroupImageUrl: [],
    videoUrl: [],
    material: "",
    lengthUnit: "",
    widthUnit: "",
    price: 0,
    quantity: 0,
    listingStatus: "",
    userId: "",
    meta: [],
  });
  const [uploadedImages, setUploadedImages] = useState<FileList | null>(null);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [availability, setAvailability] = useState("");
  let navigate = useNavigate();

  const setQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      quantity: e.target.valueAsNumber,
    });
  };
  const setTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      title: e.target.value,
    });
  };
  const setDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProduct({
      ...product,
      description: e.target.value,
    });
  };
  const submitForm = (e: React.SyntheticEvent) => {
    let data: BuyableProduct = {
      ...product,
      listingStatus: "Live",
      userId: userData.user["_id"],
    };

    setProduct(data);
    console.log("data", data);
    e.preventDefault();
    dispatch(
      createProductStart({
        product: {
          ...product,
          listingStatus: "Live",
          userId: userData.user["_id"],
        },
      })
    );
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const onUploadAttachements = (e: SyntheticEvent) => {
    e.preventDefault();

    // if (
    //   !userData.user.firstName ||
    //   !userData.user.lastName ||
    //   !userData.user.email
    // ) {
    //   snack.error("Please Login");
    // } else {
    //   if (uploadedImages === null) {
    //     snack.error("Please select images to upload");
    //   } else {
    //     dispatch(
    //       uploadDocumentsStart({
    //         documents: uploadedImages,
    //         firstName: userData.user.firstName,
    //         lastName: userData.user.lastName,
    //         email: userData.user.email,
    //       })
    //     );
    //   }
    // }
  };

  //   useEffect(() => {
  //     setProduct({
  //       ...product,
  //       productgroupimageurl: uploadedImagesUrls.map((item: any) => item.url),
  //     });
  //   }, [uploadedImagesUrls]);

  useEffect(() => {
    // if (productState.isLoading === false && productState.error === false) {
    //   setTimeout(() => {
    //     history.push({
    //       pathname: "/",
    //     });
    //   }, 1000);
    // }
  }, [productState]);

  return (
    <>
      <div id="content" className="content--desktop">
        <div className="view">
          <form onSubmit={submitForm}>
            <div>
              <div className="card card--large">
                <h1 className="p--b--5 fw--light">Create Your Listing</h1>
                <section className="listing-editor__section">
                  <div className="listing-editor__subsection">
                    <div className="col-x24 col-l4 listing-edit__section__info">
                      <div className="listing-editor__section__title">
                        <p id="red">* </p>Photos &amp; Video
                      </div>
                      {/* <p className="tc--lg fw--light m--t--2 m--b--2 lh--medium">
                        Add up to 6 photos.
                      </p> */}
                    </div>
                    <div className="col-x24 col-l20">
                      <div
                        id="imagePlaceholder"
                        data-et-name="listingEditorImageSection"
                      >
                        <div>
                          <label className="d--b">
                            <div className="">
                              <input
                                id="img-file-input"
                                name="img-file-input"
                                accept=".mov, .mp4, .png, .jpg, .jpeg"
                                aria-label="img-file-input"
                                type="file"
                                multiple
                                className=""
                                aria-required="true"
                                aria-invalid="false"
                                onChange={(e) => {
                                  e.preventDefault();
                                  setUploadedImages(e.target.files);
                                }}
                              />
                              <div className="d--fl jc--c ai--c">
                                <i className="l-icon cloud m--r--2"></i>
                                <div className="tc--white">UPLOAD</div>
                              </div>
                            </div>
                          </label>
                        </div>
                        <Button
                          style={{
                            border: "1px solid rgb(118, 118, 118)",
                            backgroundColor: "#0066FF",
                            color: "#fff",
                          }}
                          className="upload-button"
                          onClick={onUploadAttachements}
                        >
                          UPLOAD
                        </Button>
                      </div>
                      {/* {uploadedImagesUrls.map((item: any) => (
                        <div
                          style={{
                            display: "inline-block",
                            marginRight: "35px",
                            marginTop: "12px",
                          }}
                        >
                          <img
                            alt="img"
                            style={{
                              maxWidth: "200px",
                            }}
                            src={item.url}
                          />
                        </div>
                      ))} */}
                    </div>
                  </div>

                  <div className="listing-editor__subsection">
                    <div className="col-x24 col-l4 listing-edit__section__info">
                      <div className="listing-editor__section__title">
                        <p id="red">* </p>Title
                      </div>
                      <p className="tc--lg fw--light m--t--2 m--b--2 lh--medium">
                        Add a Title to your product.
                      </p>
                    </div>
                    <div
                      data-et-name="listingEditorTitle"
                      className="col-x24 col-l20"
                    >
                      <div
                        aria-haspopup="true"
                        tabIndex={0}
                        data-test="dropdown"
                        className="dropdown d--b"
                      >
                        <div data-test="dropdown-container" className="">
                          <div className="dropdown__selector type-ahead__input">
                            <div className="ps--r">
                              <input
                                placeholder="What are you selling?"
                                maxLength={500}
                                type="text"
                                data-vv-name="title"
                                className="form__text form__text--input p--4"
                                aria-required="true"
                                aria-invalid="true"
                                id="title"
                                name="title"
                                onChange={setTitle}
                              />
                              <p className="tc--lg listing-editor__title__text__suffix"></p>
                            </div>
                          </div>
                        </div>
                        <div> </div>
                      </div>
                      <p
                        className="form__error-message"
                        style={{ display: "none" }}
                      ></p>
                    </div>
                  </div>
                  <div className="listing-editor__subsection">
                    <div className="col-x24 col-l4 listing-edit__section__info">
                      <div className="listing-editor__section__title">
                        <p id="red">* </p>Description
                      </div>
                      <p className="tc--lg fw--light m--t--2 m--b--2 lh--medium">
                        Briefly describe your listing.
                      </p>
                    </div>
                    <div className="col-x24 col-l20">
                      {" "}
                      <textarea
                        placeholder="Describe it!"
                        maxLength={1500}
                        data-vv-name="description"
                        aria-label="form__text"
                        className="form__text form__text--input listing-editor__description__input p--3"
                        aria-required="true"
                        aria-invalid="false"
                        style={{ height: "135px" }}
                        name="description"
                        id="description"
                        onChange={setDescription}
                      ></textarea>
                      <p
                        className="form__error-message"
                        style={{ display: "none" }}
                      ></p>
                      <p
                        className="ta--r p--t--2 tc--lg"
                        style={{ display: "none" }}
                      >
                        1500
                      </p>
                    </div>
                  </div>
                  <div className="listing-editor__subsection">
                    <div className="col-x24 col-l4 listing-edit__section__info">
                      <div className="listing-editor__section__title">
                        <p id="red">* </p>Category
                      </div>
                      <p className="tc--lg fw--light m--t--2 m--b--2 lh--medium">
                        Add a Category to your product.
                      </p>
                    </div>
                    <div className="col-x24 col-l20">
                      <FormControl variant="outlined">
                        <InputLabel id="categoryLabel">
                          Select category
                        </InputLabel>
                        <Select
                          labelId="categoryLabel"
                          value={category}
                          key={category}
                          label="Select category"
                          onChange={(e: any) => {
                            setCategory(e.target.value);
                            setProduct({
                              ...product,
                              category: e.target.value,
                            });
                          }}
                          placeholder="Select Category"
                        >
                          <MenuItem className="" value="Womenswear">
                            Womenswear
                          </MenuItem>
                          <MenuItem value="Menswear">Menswear</MenuItem>
                          <MenuItem value="Bags">Bags</MenuItem>
                          <MenuItem value="Jewelry">Jewelry</MenuItem>
                          <MenuItem value="Shoes">Shoes</MenuItem>
                          <MenuItem value="Video games">Video games</MenuItem>
                          <MenuItem value="Books">Books</MenuItem>
                          <MenuItem value="Vinyl CD">Vinyl CD</MenuItem>
                          <MenuItem value="Camera">Camera</MenuItem>
                          <MenuItem value="Electronics">Electronics</MenuItem>
                          <MenuItem value="Mobile">Mobile</MenuItem>
                          <MenuItem value="Furniture">Furniture</MenuItem>
                          <MenuItem value="Hardware">Hardware</MenuItem>
                          <MenuItem value="Health &amp; Beauty">
                            Health &amp; Beauty
                          </MenuItem>
                          <MenuItem value="Home">Home</MenuItem>
                          <MenuItem value="Pet">Pet</MenuItem>
                          <MenuItem value="Baby">Baby</MenuItem>
                          <MenuItem value="Office">Office</MenuItem>
                          <MenuItem value="Sports">Sports</MenuItem>
                          <MenuItem value="Toys">Toys</MenuItem>
                          <MenuItem value="Auto parts">Auto parts</MenuItem>
                          <MenuItem value="Brands">Brands</MenuItem>
                          <MenuItem value="Cars">Cars</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="listing-editor__subsection">
                    <div className="col-x24 col-l4 listing-edit__section__info">
                      <div className="listing-editor__section__title">
                        <p id="red">* </p>Quantity
                      </div>
                      <p className="tc--lg fw--light m--t--2 m--b--2 lh--medium">
                        Add a Quantity for your product.
                      </p>
                    </div>
                    <div
                      data-et-name="listingEditorQuanititySection"
                      className="col-x24 col-l20"
                    >
                      <div
                        aria-haspopup="true"
                        tabIndex={0}
                        data-test="dropdown"
                      >
                        <div data-test="dropdown-container" className="">
                          <div className="dropdown__selector d--b">
                            <input
                              placeholder="Enter the Quantity"
                              type="number"
                              maxLength={50}
                              aria-label="input"
                              className="form__text form__text--input p--4"
                              onInput={setQuantity}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-editor__subsection">
                    <div className="col-x24 col-l4 listing-edit__section__info">
                      <div className="listing-editor__section__title">Size</div>
                      <p className="tc--lg fw--light m--t--2 m--b--2 lh--medium">
                        Select size (if any).
                      </p>
                    </div>
                    <div className="col-x24 col-l20">
                      <FormControl variant="outlined">
                        <InputLabel>Select Size</InputLabel>
                        <Select
                          value={size}
                          label="Select Size"
                          onChange={(e: any) => {
                            setSize(e.target.value);
                            setProduct({
                              ...product,
                              size: e.target.value,
                            });
                          }}
                        >
                          <MenuItem value="XS">XS</MenuItem>
                          <MenuItem value="S">S</MenuItem>
                          <MenuItem value="M">M</MenuItem>
                          <MenuItem value="L">L</MenuItem>
                          <MenuItem value="XL">XL</MenuItem>
                          <MenuItem value="XXL">XXL</MenuItem>
                          <MenuItem value="XXXL">XXXL</MenuItem>
                          <MenuItem value="28">28</MenuItem>
                          <MenuItem value="30">30</MenuItem>
                          <MenuItem value="32">32</MenuItem>
                          <MenuItem value="34">34</MenuItem>
                          <MenuItem value="36">36</MenuItem>
                          <MenuItem value="38">38</MenuItem>
                          <MenuItem value="40">40</MenuItem>
                          <MenuItem value="42">42</MenuItem>
                          <MenuItem value="5">5</MenuItem>
                          <MenuItem value="6">6</MenuItem>
                          <MenuItem value="7">7</MenuItem>
                          <MenuItem value="8">8</MenuItem>
                          <MenuItem value="9">9</MenuItem>
                          <MenuItem value="10">10</MenuItem>
                          <MenuItem value="11">11</MenuItem>
                          <MenuItem value="12">12</MenuItem>
                        </Select>
                      </FormControl>

                      <p
                        className="form__error-message"
                        style={{ display: "none" }}
                      >
                        false
                      </p>
                    </div>
                  </div>
                  <div className="listing-editor__subsection">
                    <div className="col-x24 col-l4 listing-edit__section__info">
                      <div className="listing-editor__section__title">
                        Brand
                      </div>
                      {/*<p className="listing-editor__optional">Optional</p>*/}
                      <p className="tc--lg fw--light m--t--2 m--b--2 lh--medium">
                        Add Brand details about your product.
                      </p>
                    </div>
                    <div
                      data-et-name="listingEditorBrandSection"
                      className="col-x24 col-l20"
                    >
                      <div
                        aria-haspopup="true"
                        tabIndex={0}
                        data-test="dropdown"
                        className="dropdown"
                      >
                        <div data-test="dropdown-container" className="">
                          <div className="dropdown__selector type-ahead__input">
                            <div
                              data-et-name="style_tag"
                              data-et-element-type="button"
                              data-et-on-name="create_listing"
                              className="ps--r"
                            >
                              <input
                                placeholder="Enter the Brand/Designer"
                                data-vv-name="style-tag-input"
                                type="text"
                                defaultValue={product.brand}
                                maxLength={50}
                                aria-label="input"
                                className="form__text form__text--input p--4"
                                onChange={(e: any) => {
                                  setProduct({
                                    ...product,
                                    brand: e.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-editor__subsection">
                    <div className="col-x24 col-l4 listing-edit__section__info">
                      <div className="listing-editor__section__title">
                        Color
                      </div>
                      {/*<p className="listing-editor__optional">Optional</p>*/}
                      <p className="tc--lg fw--light m--t--2 m--b--2 lh--medium">
                        Add color to your product.
                      </p>
                    </div>
                    <div className="col-x24 col-l20">
                      <FormControl variant="outlined">
                        <InputLabel>Select Color</InputLabel>
                        <Select
                          value={color}
                          key={color}
                          label="Select Color"
                          onChange={(e: any) => {
                            setColor(e.target.value);
                            setProduct({
                              ...product,
                              color: e.target.value,
                            });
                          }}
                        >
                          <MenuItem
                            className="d--fl ja--c br--lighter-gray m--b--2 color__circle--large"
                            style={{
                              backgroundColor: "rgb(234, 46, 46)",
                            }}
                            value={"Red"}
                          >
                            Red
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c m--b--2 color__circle--large"
                            style={{
                              backgroundColor: "rgb(251, 22, 128)",
                            }}
                            value={"Pink"}
                          >
                            Pink
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c m--b--2 color__circle--large"
                            style={{
                              backgroundColor: "rgb(252, 166, 40)",
                            }}
                            value={"Orange"}
                          >
                            Orange
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c br--lighter-gray m--b--2 color__circle--large"
                            style={{
                              backgroundColor: "rgb(255, 238, 55)",
                            }}
                            value={"Yellow"}
                          >
                            Yellow
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c m--b--2 color__circle--large"
                            style={{
                              backgroundColor: "rgb(60, 156, 68)",
                            }}
                            value={"Green"}
                          >
                            Green
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c m--b--2 color__circle--large"
                            style={{
                              backgroundColor: "rgb(19, 127, 193)",
                            }}
                            value={"Blue"}
                          >
                            Blue
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c m--b--2 color__circle--large"
                            style={{
                              backgroundColor: "rgb(127, 15, 129)",
                            }}
                            value={"Purple"}
                          >
                            Purple
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c br--lighter-gray m--b--2 color__circle--large"
                            style={{
                              backgroundColor: "rgb(255, 215, 46)",
                            }}
                            value={"Gold"}
                          >
                            Gold
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c m--b--2 color__circle--large"
                            style={{
                              backgroundColor: "rgb(233, 235, 236)",
                            }}
                            value={"Silver"}
                          >
                            Silver
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c m--b--2 color__circle--large"
                            style={{ backgroundColor: "rgb(0, 0, 0)" }}
                            value={"Black"}
                          >
                            Black
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c m--b--2 color__circle--large"
                            style={{
                              backgroundColor: "rgb(146, 146, 146)",
                            }}
                            value={"Gray"}
                          >
                            Gray
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c br--lighter-gray m--b--2 color__circle--large"
                            style={{
                              backgroundColor: "rgb(255, 255, 255)",
                            }}
                            value={"White"}
                          >
                            White
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c br--lighter-gray m--b--2 color__circle--large"
                            style={{
                              backgroundColor: "rgb(244, 224, 202)",
                            }}
                            value={"Cream"}
                          >
                            Cream
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c m--b--2 color__circle--large"
                            style={{ backgroundColor: "rgb(102, 53, 9)" }}
                            value={"Brown"}
                          >
                            Brown
                          </MenuItem>
                          <MenuItem
                            className="d--fl ja--c m--b--2 color__circle--large"
                            style={{
                              backgroundColor: "rgb(209, 180, 142)",
                            }}
                            value={"Tan"}
                          >
                            Tan
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="listing-editor__subsection">
                    <div className="col-x24 col-l4 listing-edit__section__info">
                      <div className="listing-editor__section__title">
                        Material
                      </div>
                      {/*<p className="listing-editor__optional">Optional</p> */}
                      <p className="tc--lg fw--light m--t--2 m--b--2 lh--medium">
                        Describe the fabric or material of your product.
                      </p>
                    </div>
                    <div className="col-x24 col-l20">
                      <div
                        aria-haspopup="true"
                        tabIndex={0}
                        data-test="dropdown"
                        className="dropdown"
                      >
                        <div data-test="dropdown-container" className="">
                          <div className="dropdown__selector type-ahead__input">
                            <div
                              data-et-name="style_tag"
                              data-et-element-type="button"
                              data-et-on-name="create_listing"
                              className="ps--r"
                            >
                              <input
                                placeholder="Enter the material"
                                autoComplete="off"
                                data-vv-name="style-tag-input"
                                type="text"
                                aria-label="input"
                                className="form__text form__text--input p--4"
                                onChange={(e) => {
                                  setProduct({
                                    ...product,
                                    material: e.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <h1 className="p--b--5 fw--light">Price</h1>
                <section className="listing-editor__section">
                  <div className="listing-editor__subsection">
                    <div
                      data-et-name="listingEditorPricingSection"
                      className=""
                    >
                      <div className="col-x24 col-l4 listing-edit__section__info">
                        <div className="h3 tr--uppercase tc--b fw--med m--b--2 listing-editor__section__title">
                          <p id="red">* </p>Price
                        </div>
                        <p className="tc--lg fw--light m--t--2 m--b--2 lh--medium">
                          Add price at which you want to sell your product.
                        </p>
                      </div>
                      <div className="col-x24 col-l20">
                        <div className="listing-editor__field-description__text m--t--3">
                          Original Price
                        </div>
                        <div className="d--fl ai--c">
                          <input
                            placeholder="Original sale price of the item"
                            maxLength={15}
                            type="number"
                            pattern="[0-9]*"
                            data-vv-name="originalPrice"
                            aria-label="form__text"
                            className="ff--no-increment-input p--4 listing-editor__input--half form__text form__text--input"
                            aria-required="true"
                            aria-invalid="false"
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                price: e.target.valueAsNumber,
                              });
                            }}
                          />
                        </div>
                        <p
                          className="form__error-message"
                          style={{ display: "none" }}
                        >
                          Required
                        </p>
                        <div className="listing-editor__field-description__text m--t--3">
                          Sale Price
                        </div>
                        <div className="d--fl ai--c">
                          <input
                            placeholder="The amount you wish to sell the product for"
                            maxLength={15}
                            type="number"
                            pattern="[0-9]*"
                            data-vv-name="listingPrice"
                            aria-label="form__text"
                            className="ff--no-increment-input p--4 listing-editor__input--half form__text form__text--input"
                            aria-required="true"
                            aria-invalid="false"
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                salePrice: e.target.valueAsNumber,
                              });
                            }}
                          />{" "}
                        </div>
                        <p
                          className="form__error-message"
                          style={{ display: "none" }}
                        >
                          Invalid Price
                        </p>
                        <div className="m--t--2 m--b--4"></div>
                        {/* <div className="listing-editor__field-description__text m--t--3">
                          Shipping Options
                        </div>
                        <div className="d--fl">
                          <div className="col-x24 col-l20">
                            <FormControl variant="outlined">
                              <InputLabel>Select Shipping</InputLabel>
                              <Select className="listing-editor__tile--color d--if fd--c p--2 va--t d--if ja--c fd--c">
                                <MenuItem value="5.99 USD">5.99 USD</MenuItem>
                                <MenuItem value="Free">Free</MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </div>
                        <div className="h4 m--t--3 m--b--3">
                          Earnings made by you
                        </div>
                        <div className="d--fl ai--c">
                          <div
                            data-test="text"
                            className="form__group listing-editor__input--half"
                          >
                            {" "}
                            <input
                              type="text"
                              data-test="text-input"
                              disabled={true}
                              className="form__text form__text--input listing-editor__input--half listing-editor__calculated-earnings p--4"
                            />{" "}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </section>

                <div className="">
                  <div className="form__actions" id="list_button">
                    <button
                      type="submit"
                      data-et-name="next"
                      data-et-prop-content=""
                      className="btn--list bg--btn-blue btn--large btn--wide"
                    >
                      List Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Listing;
