import { UtilService } from '../../../services/util/util.service';
import { NewUserModel } from '../../../models/newUser.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.css']
})
export class PageRegisterComponent implements OnInit {
  registerForm = new NewUserModel();
  isLoading = new BehaviorSubject<boolean>(false);
  showErrorMsg: boolean;

  public alertMessages: Array<any> = new Array<any>();

  constructor(
    private router: Router,
    public utilService: UtilService,
    private authService: AuthService) {
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
    // this.utilService.getSelectData().subscribe((res: any) => {
    //   this.countries = res.countries;
    //   this.states = res.states;
    //   this.registerForm.country = this.countries[0];
    // });
  }

  onSubmit() {
    this.isLoading.next(true);
    this.authService.signup(this.registerForm).subscribe((res: any) => {
      this.router.navigate(['/dashboard']);
      this.utilService.showSuccessToast('Account created successfully');
    });
  }
}
