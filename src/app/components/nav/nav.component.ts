import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
    cartCount: number=0;
    constructor(private prodService: ProductService){}
    
    ngOnInit(): void {
      // if(localStorage.getItem('mycart')!=undefined){
      //   let data: any=localStorage.getItem('mycart');
      //   let arr=JSON.parse(data);
      //   this.cartCount=arr.length;
      // }

      this.prodService.subject$.subscribe((pro:any)=>{
        this.cartCount=pro.length;
      })
    }
}
