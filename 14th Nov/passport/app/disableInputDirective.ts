import { Directive, Input, HostListener, ElementRef } from '@angular/core';


@Directive({ selector: '[disableInput]' })
export class DisableInputDirective {
    constructor(private element: ElementRef) { }

    @HostListener("blur") m1() {
        var value = this.element.nativeElement.value;
        
        if (value == "chandra") {
            alert("dont allow this value");
        }

        //this.element.nativeElement.value = value.charAt(0).toUpperCase()+value.substr(1).toLowerCase()+'';
    }

}