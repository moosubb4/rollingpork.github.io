import { Directive, ElementRef, Input, Output, HostListener, Renderer, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appZeroFill]'
})
export class ZeroFillDirective {
  constructor(private el: ElementRef, public renderer: Renderer) { }

  // @Input() numVal;
  @Output() addZero = new EventEmitter();

  @HostListener('focusout', ['$event']) onfocusOut(event: any) {
    const val = event.target.value;
    if (val != null && val !== '') {
      this.el.nativeElement.value = this.zeroFill(val);
    } else {
      this.el.nativeElement.value = '';
    }
  }

  @HostListener('focus', ['$event']) onFocus(event) {
    const e = <KeyboardEvent>event;
    this.el.nativeElement.select();
    // this.renderer.setElementStyle(
    //   this.el.nativeElement, 'backgroundColor', '#76FF03'
    // );
  }



  zeroFill(number) {
    let numN = number; // event.target.value;
    let numM;
    let zero;

    if (numN !== undefined && numN != null) {
      // numM = Object.values(numN).length;
      numM = numN.length;
      if (numM < 10) {
        zero = '';
        for (let i = 0; i < 10 - numM; i++) {
          zero += '0';
        }
        numN = zero + numN;
      }
    }
    this.addZero.emit(numN);
    return numN;
  }
}
