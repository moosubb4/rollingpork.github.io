import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'japDate'
})
export class JapDatePipe implements PipeTransform {
  public heisei: number = 1989;
  public showa: number = 1926;
  public yearStrArr: any[] = [];

  // Format YYYY/MM/DD

  transform(value: any): any {
    if (value && value !== '') {
      const yearString: string = value.toString();
      let yearStr = [];

      if (yearString.length <= 10) {
        const yearSlash: any[] = [
          ...yearString.split('/').map((e, i) => (i === 0 ? +e : e))
        ]; // If slash format

        const yearNoSlash: any[] =
          yearString.length > 0
            ? [
                +yearString.substr(0, 4),
                yearString.substr(4, 2),
                yearString.substr(6, 2)
              ]
            : []; // If not slash format

        yearString.match(/[/]/g)
          ? (yearStr = yearSlash)
          : (yearStr = yearNoSlash); // set format input for yearStr

        const years: number = yearStr[0]; // set year

        if (years > this.heisei) {
          // if in Heisei
          return (
            this.toHeisei(+years) +
            (yearStr[1] && yearStr[1] !== '' ? `/${yearStr[1]}` : '') + // if month included add /MM
            (yearStr[2] && yearStr[2] !== '' ? `/${yearStr[2]}` : '')
          ); // if day included add /DD
        } else if (years > this.showa && years === this.heisei) {
          // if Heisei === Showa
          return (
            this.toHeisei(+years) +
            (yearStr[1] && yearStr[1] !== '' ? `/${yearStr[1]}` : '') + // if month included add /MM
            (yearStr[2] && yearStr[2] !== '' ? `/${yearStr[2]}` : '')
          ); // if day included add /DD
        } else if (years > this.showa) {
          // if in Showa
          return (
            this.toShowa(+years) +
            (yearStr[1] && yearStr[1] !== '' ? `/${yearStr[1]}` : '') + // if month included add /MM
            (yearStr[2] && yearStr[2] !== '' ? `/${yearStr[2]}` : '')
          ); // if day included add /DD
        } else {
          // if in another year
          return (
            years +
            (yearStr[1] && yearStr[1] !== '' ? `/${yearStr[1]}` : '') + // if month included add /MM
            (yearStr[2] && yearStr[2] !== '' ? `/${yearStr[2]}` : '')
          ); // if day included add /DD
        }
      }
    } else {
      return '';
    }
  }

  toHeisei(year: any) {
    const h = 12;
    let yH: number;
    if (year && year !== undefined) {
      yH = Number(year) + h;
      return 'H' + yH.toString().substring(2, 4);
    } else {
      return '';
    }
  }

  toShowa(year: any) {
    const s = 25;
    let yS: number;
    if (year && year !== undefined) {
      if (year > s) {
        yS = Number(year) - s;
      } else {
        yS = s - Number(year);
      }
      return 'S' + yS.toString().substring(2, 4);
    } else {
      return '';
    }
  }

  // console.log('isHeisei-> ', yearString.match(/[H|S]/g));
}
