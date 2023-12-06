import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements AfterViewInit {
@ViewChild('code') code! : FormControl;
  ngAfterViewInit() {
    this.code.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      console.warn(value)
    })
    this.code.statusChanges.subscribe((status : string)=> {
      console.log(status)
    })
  }

  onSubmit(myForm: NgForm) {
    let productForm = myForm.form
    console.log(productForm)
    console.log(productForm.get('code'));
    console.log(productForm.controls['qty']);
    // SET VALUE
    productForm.setValue({name: "Baguette", code: "bread-55", qty: "20", price: {priceBook: "book1"}})
    // PATCH VALUE
    productForm.patchValue({qty: "35"})
    // RESET AI VALORI DI DEFAULT
    // productForm.reset()
  }
}
