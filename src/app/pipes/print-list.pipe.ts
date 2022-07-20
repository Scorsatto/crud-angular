import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printList',
  pure: false
})
export class PrintListPipe implements PipeTransform {

  transform(value: String[], ...args: unknown[]): unknown {
    let returnStr = '';

    if (value.length > 0) {
      value.forEach(val => {
        returnStr += ' ' + val;
      });
    }

    return returnStr;
  }
}
