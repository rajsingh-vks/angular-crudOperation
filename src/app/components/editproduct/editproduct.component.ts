import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.scss'
})
export class EditproductComponent implements OnInit {
  id: any;
  prodData!:Product;

  myForm: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  })

  constructor(private aroute:ActivatedRoute, private prodSer:ProductService, private router:Router){}
  ngOnInit(): void {
    this.id=this.aroute.snapshot.paramMap.get('id');
    // console.log(this.id)
    this.prodSer.getById(this.id)
    .subscribe({
      next: (data)=>{
        // console.log(data)
        this.prodData=data;
        this.myForm.patchValue(this.prodData);
      },
      error:(err)=> console.log(err)
    })
  }

  formSubmit() {
    let data = this.myForm.value;
    // console.log(formData)
    this.prodSer.updateProduct(this.id, data)
    .subscribe({
      next:(data)=>{
        alert('Product Updated');
        this.router.navigateByUrl("/products")
      },
      error:(err) => console.log(err)
    })
  }

  get myinputs() {
    return this.myForm.controls;
  }
}
