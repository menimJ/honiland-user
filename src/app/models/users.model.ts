export class UsersModel {
  id: string;
  last_login: Date;
  is_superuser: boolean;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: Date;
  referral_code: string;
  phone: string;
  gender: string;
  dob: Date;
  groups: string;
  user_permissions: string;
  constructor(data?: any) {
    data = data || {};
    this.id = data.id || '';
    this.last_login = data.last_login || '';
    this.is_superuser = data.is_superuser || false;
    this.username = data.username || '';
    this.first_name = data.first_name || '';
    this.last_name = data.last_name || '';
    this.email = data.email || '';
    this.is_staff = data.is_staff || false;
    this.is_active = data.is_active || false;
    this.date_joined = data.date_joined || '';
    this.referral_code = data.referral_code || '';
    this.phone = data.phone || '';
    this.gender = data.gender || '';
    this.dob = data.dob || '';
    this.groups = data.groups || '';
    this.user_permissions = data.user_permissions || '';
  }
}
