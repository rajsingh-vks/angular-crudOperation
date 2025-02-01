import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { AddproductsComponent } from './components/addproducts/addproducts.component';
// import { ProductsComponent } from './components/products/products.component';
// import { EditproductComponent } from './components/editproduct/editproduct.component';
import { authGuard } from './guards/auth.guard';
import { leaveGuard } from './guards/leave.guard';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    // {path: 'products', component:ProductsComponent},
    // {path: 'add-products', component:AddproductsComponent, canActivate:[authGuard], canDeactivate:[leaveGuard]},
    // {path: 'editpro/:id', component:EditproductComponent},
    {path: 'products', loadComponent:()=> import("./components/products/products.component"). then((m)=> m.ProductsComponent)},
    {path: 'add-products', loadComponent:()=> import("./components/addproducts/addproducts.component"). then((m)=> m.AddproductsComponent), canActivate:[authGuard], canDeactivate:[leaveGuard]},
    {path: 'editpro/:id', loadComponent:()=> import("./components/editproduct/editproduct.component"). then((m)=> m.EditproductComponent)},
];
