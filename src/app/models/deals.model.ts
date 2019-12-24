export class DealsModel {
  id: Number;
  title: string;
  description: string;
  risk_level: string;
  total_units: Number;
  maturity: Number;
  minimum_units: Number;
  unit_price: Number;
  roi: Number;
  starting_date: Date;
  closing_date: Date;
  status: string;
  image: string;
  constructor(data?: any) {
    data = data || {};
    this.id = data.id || '';
    this.title = data.title || '';
    this.description = data.description || '';
    this.risk_level = data.risk_level || '';
    this.total_units = data.total_units || 0;
    this.maturity = data.maturity || 0;
    this.minimum_units = data.minimum_units || 0;
    this.unit_price = data.unit_price || 0;
    this.roi = data.roi || 0;
    this.starting_date = data.starting_date || '';
    this.closing_date = data.starting_date || '';
    this.status = data.status || '';
    this.image = data.image || null;
  }
}
