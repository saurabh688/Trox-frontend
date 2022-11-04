import axios from "../../api/axiosController";
import { AxiosError } from "axios";
import { BuyableProduct } from "../../types";

export const getProducts = async (searchValue: string) => {
  let uri = `product/searchProduct/?value=${searchValue}`;
  try {
    const res = await axios.get(uri);
    return res.data;
  } catch (e) {
    throw e;
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
  let data1 = [];
  data1.push(buyableProduct)
  console.log('fdsafsdaf',data1)
  let uri = `/product/addProduct`;
  try {
    const res = await axios.post(uri, data1);
    return res.data;
  } catch (e) {
    const err = e as AxiosError;
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
    }
    throw e;
  }
};
