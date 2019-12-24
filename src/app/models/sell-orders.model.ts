
// user: 1
// amount: "100.00"
// amount_to_receive: "487.08"
// satoshi_value: "0.01412433"
// currency: 1
// currency_name: "GHS"
// reference_id: "BARBSQ7V1"
// tx_hash: ""
// bank_name: null
// bank_account_number: null
// phone_number: "08134667873"
// transaction_id: ""
// bank_branch: null
// note: null
// account_name: null
// created: "2019-12-16T15:38:18.488910Z"
// status: "pending"


export class SellOrderModel {
 user: string;
  amount: string;
  amount_to_receive: string;
  satoshi_value: string;
  currency: string;
  currency_name: string;
  reference_id: string;
  tx_hash: string;
  bank_name: boolean;
  bank_account_number: string;
  phone_number: string;
  transaction_id: string;
  bank_branch: string;
  note: string;
  account_name: string;
  created: string;
  status: string;

  constructor(data?: any) {
    data = data || {};
    this.user = data.id || '';
    this.amount = data.amount || '';
    this.amount_to_receive = data.amount_to_receive || false;
    this.satoshi_value = data.satochi_value || '';
    this.currency = data.currency || '';
    this.currency_name = data.currency_name || '';
    this.reference_id = data.reference_id || '';
    this.tx_hash = data.tx_hash || '';
    this.bank_name = data.bank_name || false;
    this.bank_account_number = data.bank_account_number || false;
    this.phone_number = data.phone_number || '';
    this.transaction_id = data.transactioN_id || '';
    this.bank_branch = data.bank_branch || '';
    this.note = data.note || '';
   this.created = data.string;
    this.status = data.status || '';
  }
}

