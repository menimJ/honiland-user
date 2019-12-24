import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  get(key: string, parse = false) {
    return parse ? JSON.parse(window.localStorage[key] || '{}') : window.localStorage[key];
  }

  set(key: string, data: any) {
    window.localStorage[key] = typeof data === 'string' ? data : JSON.stringify(data);
  }

  clear(...keys: string[]) {
    return keys.forEach((key: string) => {
      delete window.localStorage[key];
    });
  }

  private encryptString(value): string {
    return window.atob(value);
  }

  private decryptString(value): string {
    return window.btoa(value);
  }
}
