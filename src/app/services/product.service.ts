import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)
  private URL = "http://localhost:3000/products/"
  //get all products 
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }
  //add 
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.URL, product);
  }
  //update
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.URL}/${id}`, product);
  }
  //delete 
  // deleteProduct(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.URL}/${id}`)
  // }

  deleteProduct(id: number): Observable<any> {  
    return this.http.delete(`${this.URL}${id}`);  
  }
  //getById 
  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.URL}/${id}`)
  }
}
