import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const prodService=inject(ProductService);
  const router=inject(Router)
  if(prodService.isLoggedIn()){
    return true;
  } else{
    router.navigateByUrl('/');
    return false
  }
  // return true;
};
