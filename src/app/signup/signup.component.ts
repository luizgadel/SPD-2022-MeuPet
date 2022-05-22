import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  step = 0;
  type?: string;
  steps = 2;

  ngOnInit(): void {}

  changeStep(amount = 1) {
    if (this.type != 'Tutor') {
      // Skip the 2nd step.
      amount *= 2;
    }
    this.step += amount;
  }

  setUserType(value: string) {
    this.type = value;
    this.steps = value == 'Tutor' ? 3 : 2;
  }

  getDisplayStep(): number {
    if (this.step == 0) return 0;
    return this.type == 'Tutor' ? this.step : this.step - 1;
  }

  submit() {}
}
