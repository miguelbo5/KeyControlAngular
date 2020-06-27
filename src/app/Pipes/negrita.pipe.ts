import { Pipe, PipeTransform } from '@angular/core';
import { removeSummaryDuplicates } from '@angular/compiler';
import { stringify } from 'querystring';

@Pipe({
    name: 'negrita'
})

export class NegritaPipe implements PipeTransform {
    transform(texto:any): string {
        return '<b>' + texto + '</b>'
    }
}