import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

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

  ngAfterViewInit() {}

  onSubmit(myForm: NgForm) {
    let productForm = myForm.form;
    console.log(productForm);
    console.log(productForm.controls);

    // RESET AI VALORI DI DEFAULT
    productForm.reset();
  }
}
