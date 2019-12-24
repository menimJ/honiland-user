export class LoginModel {
  accDeviceId: string;
  msisdn: string;
  pin: string;

  newPin: string;
  newPin2: string;
  currentPin: string;

  constructor(data?: any) {
    data = data || {};
    this.currentPin = data.currentPin || '';
    this.newPin2 = data.newPin2 || '';
    this.newPin = data.newPin || '';
    this.pin = data.pin || '';
    this.msisdn = data.msisdn || '';
    this.accDeviceId = data.accDeviceId || '';
  }
}
