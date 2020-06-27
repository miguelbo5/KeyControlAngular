import { Pipe, PipeTransform } from '@angular/core';
import { removeSummaryDuplicates } from '@angular/compiler';
import { stringify } from 'querystring';

@Pipe({
    name: 'dinero'
})

export class DineroPipe implements PipeTransform {
    transform(precioEntero): number {
        let precioFormateado = precioEntero.replace("€", "")
        precioFormateado += "€"
        return precioFormateado;
    }
}