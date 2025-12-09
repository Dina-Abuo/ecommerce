import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  NonNullableFormBuilder,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Service/user-auth.service';

export interface AddressControls {
  city: FormControl<string>;
  street: FormControl<string>;
}

export interface RegisterFormControls {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  phone: FormControl<string>;
  address: FormGroup<AddressControls>;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUPComponent implements OnInit {
  registerForm!: FormGroup<RegisterFormControls>;

  constructor(
    private fb: NonNullableFormBuilder,
    private authService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  private initForm(): FormGroup<RegisterFormControls> {
    return this.fb.group({
      firstName: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      phone: this.fb.control('', [Validators.required]),

      address: this.fb.group<AddressControls>({
        city: this.fb.control('', Validators.required),
        street: this.fb.control('', Validators.required),
      }),
    });
  }

  get firstName() {
    return this.registerForm.controls.firstName;
  }
  get lastName() {
    return this.registerForm.controls.lastName;
  }
  get email() {
    return this.registerForm.controls.email;
  }
  get password() {
    return this.registerForm.controls.password;
  }
  get phone() {
    return this.registerForm.controls.phone;
  }
  get city() {
    return this.registerForm.controls.address.controls.city;
  }
  get street() {
    return this.registerForm.controls.address.controls.street;
  }

  getError(control: AbstractControl<any>): string {
    if (control.hasError('required')) return 'This field is required';
    if (control.hasError('email')) return 'Enter a valid email';
    if (control.hasError('minlength'))
      return `Minimum length is ${control.errors?.['minlength'].requiredLength}`;
    if (control.hasError('pattern')) return 'Invalid format';
    return '';
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const body = this.registerForm.getRawValue();

    this.authService.register(body).subscribe({
      next: (res) => {
        console.log('User Registered ✓', res);
        this.router.navigate(['/login']);
      },
      error: (err) => console.error(err),
    });
  }
}
