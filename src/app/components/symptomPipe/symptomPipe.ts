import { Pipe, PipeTransform } from '@angular/core';
import { CheckedSymptom } from '../../model/_model';

@Pipe({
    name: 'symptomPipe',
    pure: false
})

export class SymptomPipe implements PipeTransform {
    transform(value: CheckedSymptom[]) {
        return value.filter((data) => data.checked === true);
    }
}
