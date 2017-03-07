export class Activity {
  public title: string;
  public dateActivity: string;
  public startTime: string;
  public duration: number;
  
  constructor(
    title: string,
    dateActivity: string,
    startTime: string,
    duration: number
  ) {
    this.title = title;
    this.dateActivity = dateActivity;
    this.startTime = startTime;
    this.duration = duration;
  }
  
}