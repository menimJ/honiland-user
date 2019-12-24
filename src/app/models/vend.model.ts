export class VendModel {
  amount?: string;
  receipientID?: string;
  receipientCal?: any;
  receipientNum?: string;
  sms?: string;
  catId?: string;
  productId?: string;
  brandId?: string;
  email?: string;
  PreAuthRef?: string;
  vendDelivery?: string;

  constructor(data?: any) {
    data = data || {};
    this.amount = data.amount || '';
    this.receipientID = data.receipientID || '';
    this.receipientNum = data.receipientNum || '';
    this.receipientCal = data.receipientCal || '';
    this.sms = data.sms || '';
    this.catId = data.catId || '';
    this.productId = data.productId || '';
    this.brandId = data.brandId || '';
    this.email = data.email || '';
    this.PreAuthRef = data.PreAuthRef || '';
    this.vendDelivery = data.vendDelivery || '';
  }
}
