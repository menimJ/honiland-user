export class AccountModel {
  name: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  referrer_id: string;

  constructor(data?: any) {
    data = data || {};
    this.name = data.name || '';
    this.firstname = data.firstname || '';
    this.lastname = data.lastname || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.country = data.country || '';
    this.state = data.state || '';
    this.referrer_id = data.referrer_id || '';
  }
}
