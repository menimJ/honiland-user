import { ConfirmComponent } from './../../common-elements/confirm/confirm.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  loading: any;
  alert: any;
  loaders = [];
  toast: any;
  loaderStatus = new BehaviorSubject<boolean>(false);
  swal: any;
  options: any;
  constructor(
    private http: HttpClient,
    public toastr: ToastrService,
    private modalService: NgbModal
  ) {
    this.options = this.toastr.toastrConfig;
  }

  showSuccessToast(msg: string, title?: string) {
    this.toastr.success(msg, title);
  }

  showFailToast(msg: string, title?: string) {
    this.toastr.error(msg, title);
  }

  showConfirm(
    successCallback: Function,
    failCallback?: Function,
    message?: string
  ) {
    this.modalService.open(ConfirmComponent, { centered: true }).result.then(
      (result: any) => {
        console.log('Result', result);
        successCallback();
      },
      (reason: any) => {
        console.log('Reason', reason);
      }
    );
  }

  async showPinConfirm(callback?: Function) {
    // swal
    //   .fire({
    //     title: 'Enter your PIN',
    //     input: 'password',
    //     inputPlaceholder: 'Enter your PIN to Continue',
    //     inputAttributes: {
    //       maxlength: '10',
    //       autocapitalize: 'off',
    //       autocorrect: 'off'
    //     }
    //   })
    //   .then((res: any) => {
    //     if (successCallback) {
    //       successCallback(res);
    //     }
    //   })
    //   .catch((err: any) => {
    //     if (failCallback) {
    //       failCallback(err);
    //     }
    //   });
  }

  getJSONfromString(response: any) {
    if (typeof response !== 'string') {
      return response;
    } else {
      const splitResponse = response.split('}');
      const referral = splitResponse.pop();
      const joinResponse = splitResponse.join('}') + '}';
      const jsonData = JSON.parse(joinResponse);
      return { jsonData, referral };
    }
  }

  showLoader() {
    this.loaderStatus.next(true);
  }

  hideLoader() {
    this.loaderStatus.next(false);
  }

  getSelectData() {
    return this.http.get('../../../assets/db/selectData.json');
  }

  copyText(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  showOrderDetail(vend: any) {
    // swal.fire({
    //   title: '&nbsp;',
    //   html: `
    //   <div class="d-flex justify-content-between py-2 border-bottom">
    //       <span class="text-dark">${vend.category}</span>
    //       <span class="text-right">${vend.product}</span>
    //     </div>
    //     <div class="d-flex justify-content-between py-2 border-bottom">
    //       <span class="text-dark">Mobile</span>
    //       <span class="text-right">${vend.msisdn || '-'}</span>
    //     </div>
    //     <div class="d-flex justify-content-between py-2 border-bottom">
    //       <span class="text-dark">Recipient</span>
    //       <span class="text-right">${vend.Recipient || '-'}</span>
    //     </div>
    //     <div class="d-flex justify-content-between py-2 border-bottom">
    //       <span class="text-dark">Amount</span>
    //       <span class="text-right">${vend.amount || '-'}</span>
    //     </div>
    //     <div class="d-flex justify-content-between py-2 border-bottom">
    //       <span class="text-dark">Reference</span>
    //       <span class="text-right">${vend.ref || '-'}</span>
    //     </div>
    //     <div class="d-flex justify-content-between py-2 border-bottom">
    //       <span class="text-dark">Commission</span>
    //       <span class="text-right">${vend.comm || '-'}</span>
    //     </div>
    //     <div class="d-flex justify-content-between py-2 border-bottom">
    //       <span class="text-dark">Fees</span>
    //       <span class="text-right">${vend.fees || '-'}</span>
    //     </div>
    //     <div class="d-flex justify-content-between py-2 border-bottom">
    //       <span class="text-dark">Time</span>
    //       <span class="text-right">${vend.request_timestamp || '-'}</span>
    //     </div>
    //     <div class="d-flex justify-content-between py-2">
    //       <span class="text-dark">Status</span>
    //       <span
    //         [ngClass]="{
    //           'text-success': vend.status.toLowerCase() === 'complete',
    //           'text-danger': vend.status.toLowerCase() === 'pending'
    //         }"
    //         class="text-right"
    //         >${vend.status || '-'}</span
    //       >
    //     </div>
    //   `,
    //   showCloseButton: true,
    //   confirmButtonText: 'Okay'
    // });
  }

  getJson(res: any) {
    if (typeof res === 'string') {
      return JSON.parse(res);
    } else {
      return res;
    }
  }
}
