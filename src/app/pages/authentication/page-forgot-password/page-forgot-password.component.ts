import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UtilService } from '../../../services/util/util.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-page-forgot-password',
  templateUrl: './page-forgot-password.component.html',
  styleUrls: ['./page-forgot-password.component.css']
})
export class PageForgotPasswordComponent implements OnInit {
  forgotPasswordForm = {} as any;
  isLoading = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private utilService: UtilService,
    private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    this.isLoading.next(true);
    this.authService.forgotPassword(this.forgotPasswordForm).subscribe((res: any) => {
      this.utilService.showSuccessToast(res.detail);
      this.router.navigate(['/auth/login']);
    });
  }
}
