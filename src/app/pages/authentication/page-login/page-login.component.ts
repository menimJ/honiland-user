import { UtilService } from '../../../services/util/util.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  loginForm = {} as any;
  isLoading = new BehaviorSubject<boolean>(false);
  showErrorMsg: boolean;
  public alertMessages: Array<any> = new Array<any>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public utilService: UtilService,
    private authService: AuthService
  ) {
    this.alertMessages = [
      {
        type: 'danger',
        message: 'Unable to log in with provided credentials',
        icon: 'fa-times-circle',
        showClose: true
      }
    ];
  }
  ngOnInit() {
    this.route.queryParams.subscribe((query: Params) => {
      this.loginForm.email = query.email ? query.email : undefined;
    });
  }

  onSubmit() {
    this.isLoading.next(true);
    this.showErrorMsg = false;
    this.authService.signin(this.loginForm).subscribe(
      (res: any) => {
        this.router.navigate(['/dashboard']);
        this.utilService.showSuccessToast('Logged in successfully');
        this.isLoading.next(false);
      },
      () => {
        this.isLoading.next(false);
        this.showErrorMsg = true;
      }
    );
  }
}
