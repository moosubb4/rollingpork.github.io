import {
  Directive,
  Input,
  ElementRef,
  Renderer,
  HostListener,
  OnDestroy,
  OnInit,
  AfterViewChecked,
  OnChanges,
  EventEmitter,
  Output
} from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements OnInit {

  private _autofocus;

  @Input() title: string;
  @Input() wordstr: number;
  @Input() clsStatus: boolean;
  @Input() mxLen: boolean;

  @Output() onalert = new EventEmitter();
  @Output() onalertData = new EventEmitter(); // use for wordstr purpose
  @Output() retData = new EventEmitter<string>();

  public oldWrd: string;
  public status: boolean;
  public jpFull = new RegExp(/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4E00-\u9FAF]/, 'g');
  public jpHalf = new RegExp(/[\uFF00-\uFFEF]/, 'g');
  public symbols = new RegExp(/[\u2605-\u2606]|[\u2190-\u2195]|\u203B/, 'g');

  // public JIS = new RegExp(/[\0x0-\0x80]|[\0xa0]|[\0xa1-\0xdf]|[\0xfd-\0xff]/, 'g');
  // public Uni = new RegExp(/[\0x0-\0x80]|[\0xf8f0]|[\0xff61-\0xff9f]|[\0xf8f1-\0xf8f3]/, 'g');

  constructor(private el: ElementRef, public renderer: Renderer) {
    this.status = false;
    this.clsStatus = false;
    this.mxLen = false;
  }

  @HostListener('focusout', ['$event'])
  onFocusout(event) {
    const e = <KeyboardEvent>event;
    if (this.wordstr) {
      // this.substrByte(event.target.value);
      // console.log(this.getUTF8Length(event.target.value), this.wordstr);
      if (this.getUTF8Length(event.target.value).count > this.wordstr) {
        this.onalert.emit(true);
        this.onalertData.emit({
          status: true,
          title: this.title,
          wordstr: this.wordstr,
          id: event.target.id
        });
        if (this.mxLen === true) {
          this.el.nativeElement.value = this.getByte(event.target.value);
          // this.el.nativeElement.value = this.substrByte(event.target.value);this.getByte(event.target.value); 
        }
      }
    }
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', '');
  }

  @HostListener('keyup', ['$event'])
  onkeyup(event) {
    if (this.getUTF8Length(event.target.value).count > this.wordstr) {
      if (this.mxLen === true) {
        // this.el.nativeElement.value = this.substrByte(event.target.value);
        this.el.nativeElement.value = this.getByte(event.target.value);
      }
    }
  }

  @HostListener('focus', ['$event']) onFocus(event) {
    const e = <KeyboardEvent>event;
    this.el.nativeElement.select();
    if (this._autofocus) {
      this.renderer.setElementStyle(
        this.el.nativeElement,
        'backgroundColor',
        '#76FF03'
      );

    } else {
      this.renderer.setElementStyle(
        this.el.nativeElement,
        'backgroundColor',
        ''
      );
    }
  }

  ngOnInit() { }

  @Input()
  set autofocus(condition: boolean) {
    this._autofocus = condition != false;
  }

  // lengthInUtf8Bytes(str) {
  //   // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  //   const m = encodeURIComponent(str).match(/%[89ABab]/g);
  //   return str.length + (m ? m.length : 0);
  // }

  getUTF8Length(str: string): { count: number; strCount: number; } {
    if (!str) {
      return { count: 0, strCount: 0 }
    }
    let ch;
    let count: number = 0;
    let countTxt: number = 0;
    for (let i = 0; i < str.length; i++) {
      ch = str.charCodeAt(i);

      if ((ch >= 0x0 && ch < 0x81) || (ch == 0xf8f0) || (ch >= 0xff61 && ch < 0xffa0) || (ch >= 0xf8f1 && ch < 0xf8f4)) {
        count += 1;
      } else {
        count += 2;
      }
      // if (str.match(this.jpHalf)) {
      //   count += 1;
      // } else if (str.match(this.jpFull)) {
      //   count += 2;
      // }

      if (count <= this.wordstr) {
        countTxt++;
      }

    }

    return { count: count, strCount: countTxt }

  }

  substrByte(str: string) {
    let ch;
    let count = 0;
    let charDex = 0;
    const strlen = str.length;

    if (!str) {
      return 0;
    } else {
      for (let i = 0; i < strlen; i++) {
        ch = str.charCodeAt(i);
        do {
          count++;
          ch = ch >> 8; // shift value down by 1 byte
        } while (ch);
        if (count === this.wordstr && this.wordstr % 2 === 0) {
          charDex = i + 1;
        } else if (count + 1 === this.wordstr && this.wordstr % 2 === 1) {
          charDex = i + 1;
        }
      }

      if (count > this.wordstr) {
        if (strlen === charDex + 1) {
          this.retData.emit(str.substr(0, charDex));
          return str.substr(0, charDex);
        } else if (strlen > charDex + 1) {
          this.retData.emit(str.substr(0, charDex + 1));
          return str.substr(0, charDex + 1);
        }
      }

    }
  }

  getByte(str: string): string {

    str = str.toString().replace(/\r\n/g, "\n");
    str = str.toString().replace(/\r/g, "\n");
    str = str.toString().replace(/\n/g, "\r\n");

    if (!str) {
      return '';
    }
    let ch;
    let byte: number = 0;
    let countTxt: number = 0;

    byte = this.getUTF8Length(str).count;

    countTxt = this.getUTF8Length(str).strCount;

    // console.log('byte', byte, this.wordstr);

    if (byte > this.wordstr) {
      const substr = str.substr(0, countTxt);
      this.retData.emit(substr);
      return substr;
    } else {
      return str;
    }
  }

}
