import { RefActivity } from '../_model';

export class Activity {
  public activityType: RefActivity;
  public dateActivity: string;
  public startTime: string;
  public duration: number;

  constructor(
    activityType: RefActivity,
    dateActivity: string,
    startTime: string,
    duration: number
  ) {
    this.activityType = activityType;
    this.dateActivity = dateActivity;
    this.startTime = startTime;
    this.duration = duration;
  }

}
