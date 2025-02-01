import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitto'
})
export class LimittoPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any, args: any): any {
    if (args) {
      let arr = [];
      for (let i = 0; i < args; i++) {
        arr.push(value[i])
      }
      return arr;
    }
    return null;
  }

}
