export class News {
  public id_news: number;
  public type: string;
  public description: string;
  public date_red: string;
  public id_user: number;
  
  constructor(
    id_news: number,
    type: string,
    description: string,
    date_red: string,
    id_user: number
  ) {
    this.id_news = id_news;
    this.type = type;
    this.description = description;
    this.date_red = date_red;
    this.id_user = id_user;
  }
  
}