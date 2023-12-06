import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements AfterViewInit {
  hasDegree: string = 'false';
  degree: string = '';
  inCorso: boolean = false;
  annoConseguimento: string = '';
  diploma: string = '';
  annoConseguimentoDiploma: string = '';
  certificazione: string = '';
  dataScadenza: string = '';
  @ViewChild('code') code!: FormControl;
  anagraficaForm!: FormGroup;

  ngOnInit() {
    this.anagraficaForm = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      cognome: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(75),
      ]),
      dataNascita: new FormControl('', Validators.required),
      luogoNascita: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      codiceFiscale: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^([A-Z]{6})(\d{2})([A-Z])(\d{2})([A-Z])(\d{3})([A-Z])$/
        ),
      ]),
      sesso: new FormControl('', Validators.required),
      altezza: new FormControl(''),
      nazionalita: new FormControl('', Validators.required),
    });
  }
  ngAfterViewInit() {}

  submitAnagraficaForm() {
    if (this.anagraficaForm.valid) {
      console.log(this.anagraficaForm.value);
      this.anagraficaForm.reset();
    }
  }

  onSubmit(myForm: NgForm) {
    let productForm = myForm.form;
    console.log(productForm);
    console.log(productForm.controls);

    // RESET AI VALORI DI DEFAULT
    productForm.reset();
  }
}
