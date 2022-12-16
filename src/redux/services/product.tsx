import axios from 'axios';
import { AxiosError } from "axios";
import { BuyableProduct } from "../../types";
let baseURL = process.env.REACT_APP_BACKEND_HOST

export const getProducts = async (searchValue: string) => {
  let uri = baseURL+`product/searchProduct/?value=${searchValue}`;
  try {
    const res = await axios.get(uri);
    console.log('getProduct',res)
    return res.data;
  } catch (e:any) {
    console.log('getProducteeeee',e.response.data)
    return e.response.data
  }
};

export const getProductByID = async (data: any) => {
  let uri = `/product/${data}/viewProduct`;
  try {
    const res = await axios.get(uri);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getFilterBasedProducts = async (data: any) => {
  const { categoryId } = data;
  let uri = "";

  let filterKeys = Object.keys(data.filter);

  let filterStr = `product/${categoryId}?`;

  for (let i = 0; i < filterKeys.length; i++) {
    if (!data.filter[filterKeys[i]]) continue;
    if (i === 0) {
      filterStr = filterStr.concat(
        `${filterKeys[i]}=${data.filter[filterKeys[i]]}`
      );
    } else {
      filterStr = filterStr.concat(
        `&${filterKeys[i]}=${data.filter[filterKeys[i]]}`
      );
    }
  }
  uri = filterStr + "&priceMin=0&page=1";
  // uri = `product/${categoryId}?color=${filter.color}&brand=${filter.brand}&material=${filter.material}&priceMin=${filter.priceMin}&priceMax=${filter.priceMax}&page=${1}`;

  try {
    const res = await axios.get(uri);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const createProduct = async (buyableProduct: BuyableProduct) => {
  console.log('buyableProduct',buyableProduct)
  let data = [];
  data.push(buyableProduct)
  console.log('fdsafsdaf',data)
  let uri = baseURL+`/product/addProduct`;
  try {
    const res = await axios.post(uri, data);
    console.log('createProductres',res.data)
    return res.data;

  } catch (e:any) {
    return e.response;
  }
};
