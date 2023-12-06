import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      hasDegree: [null, Validators.required],
      degree: this.fb.group({
        type: [null, Validators.required],
        inCorso: [false],
        annoConseguimento: [null, [Validators.min(1950), Validators.max(2023)]],
      }),
      diploma: [null, Validators.required],
      annoConseguimentoDiploma: [
        null,
        [Validators.required, Validators.min(1950), Validators.max(2023)],
      ],
      certificazione: [null],
      dataScadenza: [null],
    });

    this.myForm.get('hasDegree')!.valueChanges.subscribe((value) => {
      const degreeControl = this.myForm.get('degree');
      if (value === 'true') {
        degreeControl!.setValidators(Validators.required);
      } else {
        degreeControl!.clearValidators();
      }
      degreeControl!.updateValueAndValidity();
    });

    this.myForm.get('degree.inCorso')!.valueChanges.subscribe((value) => {
      const annoConseguimentoControl = this.myForm.get(
        'degree.annoConseguimento'
      );
      if (value) {
        annoConseguimentoControl!.disable();
      } else {
        annoConseguimentoControl!.enable();
      }
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
