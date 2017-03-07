import { Activity, FreeEntry, Medication, SymptomCheck } from '../_model';

export class DiaryEntry {
  public id: number;
  public type: string;
  public description: string;
  public date_red: string;
  public id_user: number;
  public activity?: Activity;
  public freeEntry?: FreeEntry;
  public medication?: Medication;
  public symptomCheck?: SymptomCheck;

  constructor(
    id: number,
    type: string,
    description: string,
    date_red: string,
    id_user: number,
    activity?: Activity,
    freeEntry?: FreeEntry,
    medication?: Medication,
    symptomCheck?: SymptomCheck
  ) {
    this.id = id;
    this.type = type;
    this.description = description;
    this.date_red = date_red;
    this.id_user = id_user;
    this.activity = activity;
    this.freeEntry = freeEntry;
    this.medication = medication;
    this.symptomCheck = symptomCheck;
  }

}
