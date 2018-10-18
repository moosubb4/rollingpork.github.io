import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(birth: any, month?: boolean): any {
    // return null;
    const today = moment();
    const birthdate = moment(birth);
    const years = today.diff(birthdate, 'years');

    return month
      ? `${years} y ${today.subtract(years, 'years').diff(birthdate, 'months')} m`
      : years.toString();
  }

}
