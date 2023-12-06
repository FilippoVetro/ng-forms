import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-anagrafica',
  templateUrl: './anagrafica.component.html',
  styleUrls: ['./anagrafica.component.css'],
})
export class AnagraficaComponent implements OnInit {
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

  submitAnagraficaForm() {
    if (this.anagraficaForm.valid) {
      console.log(this.anagraficaForm.value);
      this.anagraficaForm.reset();
    }
  }
}
