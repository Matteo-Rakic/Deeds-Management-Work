import { Pipe, PipeTransform } from '@angular/core';
import { Land } from './admin/land-registration/land-model';

@Pipe({
  name: 'filter',
  pure: false 
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterVal: string, propName: string): any {
    if (filterVal === "" || filterVal === null) {
      let resultArray1 = [];
      for (const item of value) {
        resultArray1.push(item);
      }
      return resultArray1;
    }

    let resultArray2 = [];
    for (const item of value) {
      if (item[propName] === +filterVal) {
        resultArray2.push(item);
      }
    }
    return resultArray2;
  }

}
