export class V2eAgent {
  msisdn: string;
  amount: string;

  constructor(data?: any) {
    data = data || {};
    this.msisdn = data.msisdn || '';
    this.amount = data.amount || '';
  }
}

export class WalletTopup {
  users_id: string;
  amount: string;
  ref: string;

  constructor(data?: any) {
    data = data || {};
    this.users_id = data.users_id || '';
    this.amount = data.amount || '';
    this.ref = data.ref || '';
  }
}
