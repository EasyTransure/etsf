import { RefSymptom } from '../_model'

export class SymptomCheck {
  public rating: number;
  public symptoms: RefSymptom;
  
  constructor(
    rating: number,
    symptoms: RefSymptom
  ) {
    this.rating = rating;
    this.symptoms = symptoms;
  }
  
}