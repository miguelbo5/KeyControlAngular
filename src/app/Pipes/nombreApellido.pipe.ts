import { Pipe, PipeTransform } from '@angular/core';
import { removeSummaryDuplicates } from '@angular/compiler';
import { stringify } from 'querystring';

@Pipe({
    name: 'nombreApellido'
})

export class NombreApellidoPipe implements PipeTransform {
    transform(nombre, apellido): string {
        return nombre + " " + apellido;
    }
}