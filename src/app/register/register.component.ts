import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent
{

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this.passwordMatchValidator // custom validator for password matching
    });
  }

  // Custom validator function for password matching
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')!.value;
    const confirmPassword = formGroup.get('confirmPassword')!.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  // Handle form submission
  onSubmit() {
    if (this.registrationForm.valid) {
      // Perform form submission logic here
    }
  }

}
