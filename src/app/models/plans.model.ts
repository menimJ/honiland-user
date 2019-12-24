export class PlansModel {
  id: Number;
  title: string;
  description: string;
  status: string;
  risk_level: string;
  minimum_amount: Number;
  roi: Number;
  extra: string;

  constructor(data?: any) {
    data = data || {};
    this.id = data.id || '';
    this.title = data.title || '';
    this.description = data.description || '';
    this.status = data.status || '';
    this.risk_level = data.risk_level || '';
    this.roi = data.roi || 0;
    this.status = data.status || '';
    this.extra = data.extra || '';
  }
}




