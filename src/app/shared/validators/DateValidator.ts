import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';
export class DateValidator{

    public static validate(control : AbstractControl) : { [key: string]: boolean } | null {
        
        if(!moment(control.value, 'DD/MM/YYYY').isValid()){
            return {'dateInvalid' : true};
        }

        return null;
    }
}