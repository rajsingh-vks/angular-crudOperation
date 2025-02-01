import { Component } from '@angular/core';
import { Product } from '../../services/product';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { LimittoPipe } from '../../pipes/limitto.pipe';

@Component({
  selector: 'app-products',
  imports: [RouterLink, LimittoPipe],
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
          // console.log(data);
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

  addCart(prod: any) {
    // console.log(prod)
    // if we have blank array
    if(localStorage.getItem('mycart')!=undefined){
      let data:any = localStorage.getItem('mycart');
      let arr=JSON.parse(data);
      let status=0

      // logic for the present item stored in the Cart / if we have item in the cart then we have to update the number of the item , not the entire onject
      arr.forEach((element: any, ind: any) => {
         if(element.id==prod.id){
          status=1;
          arr[ind].items+=1;
         }
      });

      if(status==1){
        localStorage.setItem('mycart', JSON.stringify(arr));
        this.prodSer.addCartSubject(arr);
        alert("Add Cart Successfully")
        // window.location.reload();
      } else{
        let addData={...prod, item: 1};
        arr.push(addData)
        localStorage.setItem('mycart', JSON.stringify(arr));
        this.prodSer.addCartSubject(arr);
        alert("Add Cart Successfully")
        // window.location.reload();
      }
    } 
    // if we have not blank array / items present in our local storage 
    else{
        let arr=[];
        let addData={...prod, item: 1};
        arr.push(addData)
        // console.log(addData) 
        localStorage.setItem('mycart', JSON.stringify(arr));
        this.prodSer.addCartSubject(arr);
        alert("Add Cart Successfully")
        // window.location.reload();
    }
  }
}
