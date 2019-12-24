
export class StatisticsModel {
  total_orders: string;
  total_sales: string;
  orders_processing: string;
  pending_orders: string;
  completed_orders: string;



  constructor(data?: any) {
    data = data || {};
    this.total_orders = data.total_orders || '';
    this.total_sales = data.total_sales || '';
    this.orders_processing = data.orders_processing || false;
    this.pending_orders = data.pending_orders || '';
    this.completed_orders = data.completed_orders || '';

  }
}
