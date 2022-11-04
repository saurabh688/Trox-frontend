export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  countryCode: string;
  storeName?: string;
  address1?: string;
  address2?: string;
  country?: string;
  city?: string;
  state?: string;
  postCode?: string;
  governmentId?: string;
  sellerId?: number;
  role?: string;
  is2FA?: boolean;
  token?: string;
  isEmailVerified?: boolean;
  companyName?: string;
  websiteUrl?: string;
  termsAndCondition?: boolean;
}

export interface SignInUser {
  emailOrPhone: string;
  password: string;
  is2FAVerified ?: boolean;
  phoneNumber: string;
  countryCode: string;
  rememberMe ?: boolean;
}

export interface IForgotPassword {
  email: string;
}
