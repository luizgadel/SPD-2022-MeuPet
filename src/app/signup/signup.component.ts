import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  @ViewChild('input3') input3!: ElementRef;

  constructor() {}

  step = 0;
  type?: string;
  steps = 2;
  isSubmitting = false;

  forms: Array<FormGroup> = [];

  ngOnInit(): void {
    this.forms.push(
      new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
      }),
      new FormGroup({
        guardian: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        cnpj: new FormControl('', [Validators.required]),
        cmvs: new FormControl('', [Validators.required]),
        cmca: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
      }),
      new FormGroup({
        email: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.email,
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
      })
    );
  }

  changeStep(amount = 1) {
    if (this.type != 'Tutor') {
      // Skip the 2nd step.
      amount *= 2;
    }
    this.step += amount;
    setTimeout(() => {
      const inputs = [this.input1, this.input2, this.input3];
      inputs[this.step].nativeElement.focus();
    }, 500);
  }

  setUserType(value: string) {
    this.type = value;
    this.steps = value == 'Tutor' ? 3 : 2;
  }

  getDisplayStep(): number {
    if (this.step == 0) return 0;
    return this.type == 'Tutor' ? this.step : this.step - 1;
  }

  submit(event: any) {
    const form = this.forms[this.step];
    form.markAllAsTouched();
    if (!form.valid) return;
    if (this.step < this.steps - 1) {
      event.srcElement.blur();
      this.changeStep();
    } else {
      // TODO: Send data to back-end.
      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
      }, 1000);
    }
  }
}
