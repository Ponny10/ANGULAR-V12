import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {

  @HostListener('error') handleError(): void {
    const img = this.imgBroken.nativeElement;
    img.src = '../../../assets/no-image.png';
  }

  constructor(private imgBroken: ElementRef) { }

}
