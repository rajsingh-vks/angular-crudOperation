import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproducts',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.scss'
})
export class AddproductsComponent {
  myForm: any = new FormGroup({
    // fullName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,100}')]),
    // email: new FormControl('', [Validators.required]),
    // password: new FormControl('', [Validators.required]),
    // mobile: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  })

  constructor(private prodSer: ProductService, private router:Router){ }
  formSubmit() {
    let formData = this.myForm.value;
    // console.log(formData)
    this.prodSer.addProduct(formData)
    .subscribe({
      next:(data)=>{
        alert('Product Added');

        this.router.navigateByUrl("/products")

        // (<any>this.router).navigate("/products");
      },
      error:(err) => console.log(err)
    })
  }

  get myinputs() {
    return this.myForm.controls;
  }

  canExit():boolean{
    if(confirm("Do you want to leave it before save?")){
      return true;
    } else{
      return false
    }
  }
}
