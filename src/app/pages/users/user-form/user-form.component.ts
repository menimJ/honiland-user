import { UtilService } from './../../../services/util/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from './../../../services/users/users.service';
import { UsersModel } from './../../../models/users.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  users = {} as UsersModel;
  isLoading = new BehaviorSubject<boolean>(false);
  user$ = new BehaviorSubject<UsersModel>({} as UsersModel);
  formaction$ = new BehaviorSubject<boolean>(false);
  hasFormErrors = false;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private ngbDateParserFormatter: NgbDateParserFormatter,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private util: UtilService
  ) {}

  createUserForm() {
    this.userForm = this.formBuilder.group({
      username: [
        this.users.username,
        [Validators.compose([Validators.required])]
      ],
      first_name: [this.users.first_name],
      last_name: [this.users.last_name],
      email: [this.users.email, [Validators.compose([Validators.email])]],
      phone: [this.users.phone],
      gender: [this.users.gender],
      dob: [this.users.dob],
      is_superuser: [this.users.is_superuser],
      is_staff: [this.users.is_staff],
      is_active: [this.users.is_active],
      referral_code: [this.users.referral_code]
    });
  }

  addUser() {
    this.isLoading.next(true);
    if (this.userForm.invalid) {
      const controls = this.userForm.controls;
      Object.keys(controls).forEach(key => controls[key].markAsTouched());
      this.hasFormErrors = true;
      this.isLoading.next(false);
      return;
    }

    this.userForm.value.date_of_birth = this.ngbDateParserFormatter.format(
      this.userForm.value.date_of_birth
    );

    if (this.id) {
      this.updateUser();
    } else {
      this.saveUser();
    }
  }

  saveUser() {
    this.userService.createUsers(this.userForm.value).subscribe(
      (res: any) => {
        this.isLoading.next(false);
        this.route.navigate(['/home/users']);

        console.log('Response', res);
        this.util.showSuccessToast('Add  User Successful', 'Success');
      },
      (err: Error) => {
        this.isLoading.next(false);
        console.log('Error', err);
        this.util.showFailToast('Add User Failed', 'Error');
      }
    );
  }

  updateUser() {
    this.userService.updateUsers(this.id, this.userForm.value).subscribe(
      (res: any) => {
        this.isLoading.next(false);
        console.log('Response', res);
        this.route.navigate(['/home/users']);
        this.util.showSuccessToast('Update User  Successful', 'Success');
      },
      (err: Error) => {
        this.isLoading.next(false);
        console.log('Error', err);
        this.util.showFailToast('Update User  Failed', 'Error');
      }
    );
  }

  getUserById(id: string) {
    this.userService.getUsersById(id).subscribe(
      (res: any) => {
        this.userForm.value.date_of_birth = new Date(res.dob);
        this.users = res;
        this.userForm.patchValue(this.users);
      },
      (err: Error) => {
        console.log('Error', err);
      }
    );
  }

  setDateFormate(date: any) {
    return new Date(date.year, date.month, date.day);
  }

  goBack() {
    this.route.navigate(['/home/users']);
    this.userForm.reset();
    this.isLoading.next(false);
    this.hasFormErrors = false;
  }

  closeAlert(e) {
    this.hasFormErrors = false;
  }

  ngOnInit() {
    this.createUserForm();
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
      if (this.id) {
        this.getUserById(this.id);
      }
    });
  }
}
