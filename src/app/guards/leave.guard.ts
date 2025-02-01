import { CanDeactivateFn } from '@angular/router';
import { AddproductsComponent } from '../components/addproducts/addproducts.component';

export const leaveGuard: CanDeactivateFn<AddproductsComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canExit();
  // return true;
};
