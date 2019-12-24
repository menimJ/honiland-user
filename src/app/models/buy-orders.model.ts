export class BuyOrderModel {
  id: string;
  receiving_address: string;
  currency: string;
  currency_name: string;
  satoshi_value: string;
  reference_id: string;
  total_sales: string;
  transaction_id: boolean;
  amount_paid: string;
  amount_needed: string;
  amount_to_pay: string;
  created: string;
  user: string;
  status: string;

  constructor(data?: any) {
    data = data || {};
    this.id = data.id || '';
    this.receiving_address = data.receiving_address || '';
    this.currency= data.currency || false;
    this.currency_name = data.currency_name || '';
    this.satoshi_value = data.satochi_value|| '';
    this.reference_id = data.reference_id || '';
    this.total_sales = data.total_sales || '';
    this.transaction_id = data.transaction_id|| false;
    this.amount_paid = data.amount_paid || false;
    this.amount_needed = data.amount_needed|| '';
    this.amount_to_pay = data.amount_to_pay|| '';
    this.created = data.created || '';
    this.user = data.user || '';
    this.status = data.status || '';
  }
}
