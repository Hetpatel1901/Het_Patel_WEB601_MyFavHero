import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input() defaultColor:string="";  
  @Input() highlightColor:string="";
  @Input() highlighttext:string="";  
  private isHighlighted: boolean = false;

@HostBinding('style.text-decoration') underline:string=this.defaultColor; 
@HostBinding('style.font-weight') bold:string=this.defaultColor;
constructor(private eleRef:ElementRef) { }

  @HostListener('mouseover') mouseover(eventData:Event){  
    this.underline=this.highlightColor;  
  // this.eleRef.nativeElement.style.color="White";  
  }  

  @HostListener('mouseleave') mouseleave(eventData:Event){  
    this.underline=this.defaultColor;  
    //this.eleRef.nativeElement.style.color="Black";  
  } 

  // @HostListener('mouseover') mouseover2(eventData:Event){  
  //   this.bold=this.highlighttext;  
  // // this.eleRef.nativeElement.style.color="White";  
  // }  

  // @HostListener('mouseleave') mouseleave2(eventData:Event){  
  //   this.bold=this.defaultColor;  
  //   //this.eleRef.nativeElement.style.color="Black";  
  // } 



  @HostListener('click') onClick() {
    //this.isHighlighted = !this.isHighlighted;
    this.bold=this.highlighttext;
  }

}
