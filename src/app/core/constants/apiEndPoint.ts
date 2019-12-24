import { environment } from '../../../environments/environment';

export class ApiEndPoints {
  API_USERS = environment.baseUrl + 'admin_users/';
  BUY_ORDERS = environment.baseUrl + 'admin_buy_orders/';
  SELL_ORDERS = environment.baseUrl + 'admin_sell_orders/';
  STATISTICS = environment.baseUrl + 'analytics/';
  API_DEALS = environment.baseUrl + 'admin/deals';
  API_PLANS = environment.baseUrl + 'admin/plans/';
  API_AUTH = environment.baseUrl + 'rest-auth/';
}

