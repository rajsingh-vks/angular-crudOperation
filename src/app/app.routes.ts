import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'products', component:ProductsComponent},
    {path: 'add-products', component:AddproductsComponent},
];
