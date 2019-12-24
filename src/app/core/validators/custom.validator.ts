import { ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export class CustomValidators {
  static MustExceedAmount(): ValidatorFn {
    return null;
  }

  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value; // get password from our password form control
    const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  }

  static AmountRange(control: AbstractControl) {
    const amount = control.get('amount').value;
    const target = control.get('target').value;

    if (amount > target) {
      control.get('target').setErrors({ targetIsLess: true });
    }
  }

  static DateRange(control: AbstractControl) {
    const isAfter = moment(control.get('end_date').value).isAfter(
      control.get('starting_date').value
    );
    const diff = moment(control.get('end_date').value).diff(
      control.get('starting_date').value,
      'days'
    );
    const interval = control.get('interval').value;

    if (!isAfter) {
      control.get('end_date').setErrors({ dateRangeErr: true });
      return;
    }

    if (interval === 'daily' && diff < 1) {
      control.get('end_date').setErrors({ dailyIntervalErr: true });
      return;
    }

    if (interval === 'weekly' && diff < 7) {
      control.get('end_date').setErrors({ weeklyIntervalErr: true });
      return;
    }

    if (interval === 'monthly' && diff < 30) {
      control.get('end_date').setErrors({ monthlyIntervalErr: true });
      return;
    }
  }
}

export class DateDifference {
  static CheckDateDifference(control: AbstractControl) {
    if (control.get('completionDate').value === '') {
      return null;
    }
    const date = moment(control.get('startDate').value); // to get value in input tag
    const endDate = moment(control.get('completionDate').value); // to get value in input tag
    const dDate = endDate.isBefore(date, 'months');
    if (dDate) {
      control.get('completionDate').setErrors({
        checkDate: true
      });
    } else {
      return null;
    }
  }
}
