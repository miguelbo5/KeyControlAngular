import { Pipe, PipeTransform } from '@angular/core';
import { removeSummaryDuplicates } from '@angular/compiler';
import { stringify } from 'querystring';

@Pipe({
    name: 'trueFalse'
})

export class TrueFalsePipe implements PipeTransform {
    transform(booleano: boolean): string {
        
        if(booleano){
            return "Sí";
        }else{
            return "No";
        }

    }
}