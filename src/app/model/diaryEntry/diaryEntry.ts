import { Activity, FreeEntry, Medication, SymptomCheck } from '../_model';

export class DiaryEntry {
  public id: string;
  public type: string;
  public description: string;
  public creationDate: string;
  public uid: string;
  public activity?: Activity;
  public freeEntry?: FreeEntry;
  public medication?: Medication;
  public symptomCheck?: SymptomCheck;

  constructor(
    id: string,
    type: string,
    description: string,
    creationDate: string,
    uid: string,
    activity?: Activity,
    freeEntry?: FreeEntry,
    medication?: Medication,
    symptomCheck?: SymptomCheck
  ) {
    this.id = id;
    this.type = type;
    this.description = description;
    this.creationDate = creationDate;
    this.uid = uid;
    this.activity = activity;
    this.freeEntry = freeEntry;
    this.medication = medication;
    this.symptomCheck = symptomCheck;
  }

}
