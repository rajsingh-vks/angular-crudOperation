import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)
  // subject$=new Subject();
  subject$:any;

  private URL = "http://localhost:3000/products";

  constructor(){
    if(typeof window !=='undefined' && 'localStorage' in window ){
      let localdata=window.localStorage.getItem('mycart')|| '{}';
      this.subject$=new BehaviorSubject(localdata!==undefined?JSON.parse(localdata):[]);
    }
  }

  // error solution 
  // https://stackoverflow.com/questions/46915002/argument-of-type-string-null-is-not-assignable-to-parameter-of-type-string

  //Add Cart data in subject
  addCartSubject(data:any){
    this.subject$.next(data)
  } 

  //get all products 
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }
  //add 
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.URL, product);
  }
  //update
  updateProduct(id: any, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.URL}/${id}`, product);
  }
  //delete 
  // deleteProduct(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.URL}/${id}`)
  // }

  deleteProduct(id: any): Observable<any> {  
    return this.http.delete(`${this.URL}/${id}`);  
  }
  //getById 
  getById(id: any): Observable<Product> {
    return this.http.get<Product>(`${this.URL}/${id}`)
  }

  // auth guard
  // isLoggedIn(){
  //   return false
  // }

  // leave guard
  isLoggedIn(){
    return true
  }
}
