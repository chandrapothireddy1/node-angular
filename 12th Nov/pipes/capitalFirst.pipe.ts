import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalFirst'
})

export class CapitalFirstPipe implements PipeTransform {
    transform(value: string): any {
        return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase()+'';
    }
}
