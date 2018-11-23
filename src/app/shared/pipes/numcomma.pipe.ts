import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numcomma'
})
export class NumcommaPipe implements PipeTransform {
  public jpFull = new RegExp(
    /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4E00-\u9FAF]/,
    'g'
  );
  public jpHalf = new RegExp(/[\uFF00-\uFFEF]/, 'g');
  public number = new RegExp(/[\uFF10-\uFF19]/, 'g');
  public symbols = new RegExp(/[\u2605-\u2606]|[\u2190-\u2195]|\u203B/, 'g');

  transform(value: any): any {
    if (value && value.toString().includes('-')) {
      value = `-` + value.toString().replace(new RegExp('-', 'g'), '');
    }
    if (value === '' || value === '-') {
      return value;
    }
    if (value === null || value === undefined) {
      return 0;
    } else {
      // let toNumber = '';
      let chanum: number;

      // if (value.toString().match(this.number)) {
      //   for (let i = 0; i < value.length; i++) {
      //     const jpNum = value[i];
      //     jpNum.match(/[\uFF10]/g) ? toNumber += '0'
      //       : jpNum.match(/[\uFF11]/g) ? toNumber += '1'
      //         : jpNum.match(/[\uFF12]/g) ? toNumber += '2'
      //           : jpNum.match(/[\uFF13]/g) ? toNumber += '3'
      //             : jpNum.match(/[\uFF14]/g) ? toNumber += '4'
      //               : jpNum.match(/[\uFF15]/g) ? toNumber += '5'
      //                 : jpNum.match(/[\uFF16]/g) ? toNumber += '6'
      //                   : jpNum.match(/[\uFF17]/g ? toNumber += '7'
      //                     : jpNum.match(/[\uFF18]/g) ? toNumber += '8'
      //                       : jpNum.match(/[\uFF19]/g) ? toNumber += '9'
      //                         : '');
      //     console.log('​NumcommaPipe -> toNumber', toNumber);
      //   }
      //   chanum = Number(toNumber);
      // } else {
      chanum = Number(value.toString().replace(/[^0-9\.-]+/g, ''));
      //   console.log('​NumcommaPipe -> ELSE', chanum);
      // }

      if (isNaN(chanum) || chanum === null || chanum === undefined) {
        return 0;
      } else {
        const numback = chanum;
        return numback.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    }
  }
}
