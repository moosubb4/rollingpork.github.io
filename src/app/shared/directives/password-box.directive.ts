import { Directive, Input, Output, EventEmitter, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appPasswordBox]'
})
export class PasswordBoxDirective {

  public passWordGet: string;
  @Input() appPasswordBox: string;
  @Output() passWordShow = new EventEmitter<string>();

  constructor(private _el: ElementRef) {
    this.passWordGet = '';
  }

  @HostListener('keydown.enter', ['$event']) onKeyDown(e) {
    const type = this._el.nativeElement.type;
    const value = this._el.nativeElement.value;
    // console.log('Enter type -> ', type, '\npass ->', value);
    this._el.nativeElement.type = 'tel';
    this.passWordGet = value;

    let showtext = '';
    if (this.passWordGet) {
      for (let i = 0; i < this.passWordGet.length; i++) {
        showtext += String.fromCharCode(8226);
      }
    }
    this.passWordShow.emit(this.passWordGet);
    this._el.nativeElement.value = showtext;
  }

  @HostListener('focusout', ['$event']) onFocusout(e) {
    const type = this._el.nativeElement.type;
    const value: string = this._el.nativeElement.value;



    this._el.nativeElement.type = 'tel';
    if (type === 'password' && !value.match(String.fromCharCode(8226))) {

      this.passWordGet = value;
      this._el.nativeElement.type = 'tel';

      let showtext = '';
      if (this.passWordGet) {
        for (let i = 0; i < this.passWordGet.length; i++) {
          showtext += String.fromCharCode(8226);
        }
      }
      this._el.nativeElement.value = showtext;
    }
    this.passWordShow.emit(this.passWordGet);

    // console.log('FocusOut type -> ', type, '\npass ->', value, '\n', this.passWordGet);

  }

  @HostListener('keyup', ['$event']) onkeyup(e) {
    const type = this._el.nativeElement.type;
    const value = this._el.nativeElement.value;
    // console.log('KeyUp type -> ', type, '\npass ->', value);
    this._el.nativeElement.type = 'password';
  }



  @HostListener('focus', ['$event']) onFocus(e) {
    const type = this._el.nativeElement.type;
    const value = this._el.nativeElement.value;
    // console.log('Focus type -> ', type, '\npass ->', value);
    this._el.nativeElement.type = 'password';
    if (this.appPasswordBox) {
      this._el.nativeElement.value = this.appPasswordBox;
    }
  }
}
