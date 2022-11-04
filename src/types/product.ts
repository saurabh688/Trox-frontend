export interface BuyableProduct  {
  title: string;
  description: string;
  color:string;
  category: string;
  brand: string;
  condition: String;
  salePrice: number;
  size:string,
  shippingCostStandard: number;
  shippingCostExpedited: number;
  shippingLength: string;
  shippingWidth: string;
  shippingHeight: string;
  shippingWeight: string;
  productGroupImageUrl: string[];
  videoUrl: string[];
  lengthUnit: string;
  widthUnit: string;
  material: string;
  price: number;
  quantity: number;
  listingStatus: string;
  userId: string;
  meta: Array<Object>;
}
