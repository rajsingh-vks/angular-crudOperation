import { Component } from '@angular/core';
import { Product } from '../../services/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productData: Product[] = [];
  constructor(private prodSer: ProductService) { }
  ngOnInit(): void {
    this.prodSer.getAll()
      .subscribe({
        next: (data) => {
          console.log(data);
          this.productData = data;
        },
        error: (err) => console.log(err)
      })
  }
  // delPro(id: number) {
  //   if (confirm("Do u want to delete ?")) {
  //     this.prodSer.deleteProduct(id)
  //       .subscribe({
  //         next: (data) => {
  //           alert("Product Deleted!")
  //           let pdata = this.productData.filter(prod => prod.id!= id);
  //           this.productData = pdata;
  //         },
  //         error: (err) => console.log(err)
  //       })
  //   }
  // }

  delPro(id:number){
    if(confirm("Do u want delete the product")){
      this.prodSer.deleteProduct(id)
      .subscribe({
        next:(data) => {
          alert("Product Deleted")
          let pdata=this.productData.filter(prod=> prod.id!=id);
          this.productData = pdata;
        },
        error: (err) => console.log(err)
      })
    }
  }

}
