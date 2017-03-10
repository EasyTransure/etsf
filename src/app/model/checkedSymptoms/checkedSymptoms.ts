import { RefSymptom } from '../_model'

export class CheckedSymptom extends RefSymptom {
    public checked: boolean;

    constructor(
        id: string,
        name: string,
        checked?: boolean
    ) {
        super(id, name);
        this.checked = checked ? checked: false;
    }

}
